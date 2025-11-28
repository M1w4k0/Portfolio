const express = require("express");
const nodemailer = require("nodemailer");
const rateLimit = require("express-rate-limit");
const { z } = require("zod");
require("dotenv").config();

const router = express.Router();

function escapeHtml(s = "") {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function renderText({ name, email, message }) {
  return [
    "📬 New message from your portfolio",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
    "",
    `Reply: ${email}`,
  ].join("\n");
}
function renderEmail({ name, email, message }) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMsg = escapeHtml(message).replace(/\n/g, "<br/>");
  const html = `<!doctype html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>New message from ${safeName}</title></head>
<body style="background:#f5f7fb;padding:40px;font-family:Inter,system-ui,Arial,sans-serif">
  <h2 style="margin:0 0 8px">📬 New message from your portfolio</h2>
  <p style="margin:0 0 24px;color:#6b7280">You received a new contact request.</p>
  <div style="background:#fff;border-radius:16px;padding:24px;box-shadow:0 4px 18px rgba(0,0,0,.06)">
    <div style="margin-bottom:16px"><strong>Name:</strong> ${safeName}</div>
    <div style="margin-bottom:16px"><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></div>
    <div><strong>Message:</strong><br/>${safeMsg}</div>
  </div>
  <p style="color:#6b7280;margin-top:18px">Sent from <strong>Portfolio Zoe</strong>.</p>
</body></html>`;
  return { html, text: renderText({ name: safeName, email: safeEmail, message }) };
}

/* ----------------- config env ----------------- */
const {
  RESEND_API_KEY,
  RESEND_FROM = 'Portfolio Zoe <onboarding@resend.dev>',
  MAIL_TO,
  GMAIL_USER,
  GMAIL_APP_PASSWORD,
  MAIL_FROM_NAME = "Portfolio Zoe",
} = process.env;

const USE_RESEND = !!RESEND_API_KEY;

let gmailTransport = null;
if (!USE_RESEND) {
  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    console.warn("⚠️  RESEND_API_KEY absent et SMTP Gmail incomplet ⇒ l'envoi échouera.");
  } else {
    gmailTransport = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
    });
    gmailTransport.verify().then(
      () => console.log("✅ SMTP Gmail prêt"),
      (e) => console.error("❌ SMTP Gmail KO:", e?.message || e)
    );
  }
}

/* ----------------- helpers d'envoi ----------------- */
async function sendWithResend({ to, subject, html, text, replyTo }) {
  // Node 18+ a fetch global; Render utilise Node 22 → OK
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: RESEND_FROM,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
      text,
      reply_to: replyTo?.address ? `${replyTo.name ?? ""} <${replyTo.address}>` : undefined,
    }),
  });
  const data = await r.json().catch(() => ({}));
  if (!r.ok) {
    const msg = data?.message || data?.error || `Resend HTTP ${r.status}`;
    throw new Error(msg);
  }
  return data; // { id: '...' }
}

async function sendWithGmail({ to, subject, html, text, replyTo }) {
  if (!gmailTransport) throw new Error("SMTP Gmail not configured");
  return gmailTransport.sendMail({
    from: `"${MAIL_FROM_NAME}" <${GMAIL_USER}>`,
    to,
    subject,
    text,
    html,
    replyTo,
    headers: { "X-Source": "portfolio-contact" },
  });
}

async function sendEmail(payload) {
  if (USE_RESEND) return sendWithResend(payload);
  return sendWithGmail(payload);
}

/* ----------------- middlewares ----------------- */
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
});

const ContactSchema = z.object({
  name: z.string().min(1).max(100).trim(),
  email: z.string().email().max(200).trim(),
  message: z.string().min(1).max(5000).trim(),
  website: z.string().optional(),
  t: z.number().optional(),
});

/* ----------------- routes ----------------- */
router.post("/", limiter, async (req, res) => {
  // honeypot + anti-bot simple
  if (req.body?.website) return res.status(200).json({ success: true });
  const startTs = Number(req.body?.t || 0);
  if (startTs && Date.now() - startTs < 800) return res.status(429).json({ error: "Too fast" });

  const parsed = ContactSchema.safeParse({ ...req.body, t: startTs || undefined });
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });

  const { name, email, message } = parsed.data;
  const { html, text } = renderEmail({ name, email, message });

  try {
    const info = await sendEmail({
      to: MAIL_TO || GMAIL_USER,
      subject: `New message from ${name}`,
      html,
      text,
      replyTo: { name, address: email },
    });

    console.log("✅ Email envoyé:", info);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("❌ Envoi échoué:", err);
    return res.status(502).json({ error: err?.message || "Failed to send email" });
  }
});

router.get("/selftest", async (_req, res) => {
  try {
    const { html, text } = renderEmail({
      name: "SelfTest",
      email: "no-reply@example.com",
      message: "If you see this, email works.",
    });
    const info = await sendEmail({
      to: MAIL_TO || GMAIL_USER,
      subject: `Self-test portfolio #${Date.now()}`,
      html,
      text,
    });
    res.json({ ok: true, info });
  } catch (e) {
    res.status(500).json({ ok: false, error: e?.message || String(e) });
  }
});

module.exports = router;
