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

  const html = `<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>New message from ${safeName}</title>
  <style>
    body,table,td,a{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Inter,Arial,sans-serif;}
    img{border:0;outline:none;text-decoration:none;}
    table{border-collapse:collapse!important;}
    body{margin:0!important;padding:0!important;background:#f5f7fb;}
    @media (prefers-color-scheme: dark) {
      body{background:#0b0c10!important;}
      .card{background:#12141a!important;border-color:#1c1f29!important;}
      .muted{color:#aab2c5!important;}
      .title{color:#e6e9f2!important;}
      .label{color:#cbd3e1!important;}
      .value{color:#f0f3fa!important;}
      .divider{background:#1f2430!important;}
      .btn{background:#4c8dff!important;}
      .footer{color:#97a1b6!important;}
    }
    @media only screen and (max-width:600px) {
      .container{width:100%!important;padding:16px!important;}
      .card{padding:18px!important;}
      .title{font-size:18px!important;}
    }
  </style>
</head>
<body style="background:#f5f7fb; padding:60px 0;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <table role="presentation" width="800" class="container" cellpadding="0" cellspacing="0" style="width:800px;max-width:100%;padding:40px;">
          <tr>
            <td>
              <!-- Header -->
              <table role="presentation" width="100%">
                <tr>
                  <td align="left" style="padding:4px 0 24px 0;">
                    <div class="title" style="font-weight:700;font-size:25px;letter-spacing:0.2px;color:#111827;">
                      📬 New message from your portfolio
                    </div>
                    <div class="muted" style="font-size:15px;color:#6b7280;">You received a new contact request.</div>
                  </td>
                </tr>
              </table>

              <!-- Card -->
              <table role="presentation" width="100%" class="card" style="background:#ffffff;border:none;border-radius:25px;box-shadow:0 4px 18px rgba(0,0,0,0.06);">
                <tr>
                  <!-- Padding appliqué sur le TD (compat clients email) -->
                  <td style="padding:60px 72px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-bottom:22px;">
                          <div class="label" style="font-size:15px;color:#181ad6;font-weight:400;text-transform:uppercase;letter-spacing:0.6px;">NAME</div>
                          <div class="value" style="font-size:18px;color:#111827;font-weight:600;margin-top:6px;">${safeName}</div>
                        </td>
                      </tr>

                      <tr>
                        <td style="padding-bottom:22px;">
                          <div class="label" style="font-size:15px;color:#181ad6;font-weight:400;text-transform:uppercase;letter-spacing:0.6px;">EMAIL</div>
                          <div class="value" style="font-size:18px;color:#111827;margin-top:6px;">
                            <a href="mailto:${safeEmail}" style="color:#808080;text-decoration: underline;">${safeEmail}</a>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div class="label" style="font-size:15px;color:#181ad6;font-weight:400;text-transform:uppercase;letter-spacing:0.6px;">MESSAGE</div>
                          <div class="value" style="font-size:18px;color:#111827;line-height:1.6;margin-top:6px;">${safeMsg}</div>
                        </td>
                      </tr>
                    </table>

                    <!-- CTA centered -->
                    <table role="presentation" width="100%" align="center" style="margin-top:44px;text-align:center;">
                      <tr>
                        <td align="center">
                          <a href="mailto:${safeEmail}"
                             style="display:inline-block;background:#d7ff88;color:#000000;text-decoration:none;
                                    padding:14px 28px;border-radius:12px;font-weight:700;font-size:14px;">
                            Reply to ${safeName}
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Footer -->
              <table role="presentation" width="100%" style="margin-top:30px;">
                <tr>
                  <td class="footer" style="font-size:13px;color:#6b7280;text-align:center;line-height:1.5;">
                    Sent from <strong>Portfolio Zoe</strong>.<br />
                    If you didn’t expect this, you can safely ignore this email.
                  </td>
                </tr>
              </table>

            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>


</html>`;

  return { html, text: renderText({ name: safeName, email: safeEmail, message }) };
}

/* ---------- config ---------- */
const {
  GMAIL_USER,
  GMAIL_APP_PASSWORD,
  MAIL_FROM_NAME = "Portfolio Zoe",
  MAIL_TO = GMAIL_USER,
} = process.env;

if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
  console.error("❌ SMTP config manquante: GMAIL_USER / GMAIL_APP_PASSWORD");
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
});
transporter.verify().then(
  () => console.log("✅ SMTP Gmail prêt"),
  (e) => console.error("❌ SMTP Gmail KO:", e.message)
);

/* ---------- middlewares ---------- */
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

/* ---------- routes ---------- */
router.post("/", limiter, async (req, res) => {
  if (req.body?.website) return res.status(200).json({ success: true }); // honeypot
  const startTs = Number(req.body?.t || 0);
  if (startTs && Date.now() - startTs < 1500) return res.status(429).json({ error: "Too fast" });

  const parsed = ContactSchema.safeParse({ ...req.body, t: startTs || undefined });
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });

  const { name, email, message } = parsed.data;
  const subject = `New message from ${name}`;
  const safeSubject = subject || `New message from ${name}`; // garde-fou
  const { html, text } = renderEmail({ name, email, message });

  try {
    const info = await transporter.sendMail({
      from: `"${MAIL_FROM_NAME}" <${GMAIL_USER}>`, // expéditeur = ton Gmail
      to: MAIL_TO,
      subject: String(safeSubject),
      text,
      html,
      replyTo: { name, address: email },
      headers: {
        "X-Source": "portfolio-contact",
        "X-Visitor-Email": email,
      },
    });

    console.log("✅ Email envoyé:", {
      id: info.messageId,
      accepted: info.accepted,
      response: info.response,
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("❌ Envoi échoué:", err?.message || err);
    return res.status(502).json({ error: "Failed to send email" });
  }
});

router.get("/selftest", async (_req, res) => {
  try {
    const info = await transporter.sendMail({
      from: `"${MAIL_FROM_NAME}" <${GMAIL_USER}>`,
      to: MAIL_TO,
      subject: `Self-test portfolio #${Date.now()}`,
      text: "If you see this, SMTP works.",
    });
    res.json({ ok: true, id: info.messageId });
  } catch (e) {
    res.status(500).json({ ok: false, error: e?.message || String(e) });
  }
});

module.exports = router;


