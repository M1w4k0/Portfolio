import nodemailer from "nodemailer";

// ---- helpers (adapté de ton code) ----
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
  const html = `<!doctype html><html><body>
  <div style="font-family:Inter,system-ui,Arial,sans-serif;background:#f5f7fb;padding:40px">
    <div style="max-width:800px;margin:0 auto;background:#fff;border-radius:20px;box-shadow:0 4px 18px rgba(0,0,0,.06);padding:40px">
      <h1 style="margin:0 0 8px">📬 New message from your portfolio</h1>
      <p style="margin:0 0 24px;color:#6b7280">You received a new contact request.</p>
      <p style="margin:0"><b>Name:</b> ${safeName}</p>
      <p style="margin:6px 0"><b>Email:</b> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
      <hr style="border:0;border-top:1px solid #e5e7eb;margin:20px 0"/>
      <div style="line-height:1.6">${safeMsg}</div>
      <div style="margin-top:24px">
        <a href="mailto:${safeEmail}" style="display:inline-block;background:#d7ff88;color:#000;text-decoration:none;padding:12px 20px;border-radius:10px;font-weight:700">Reply</a>
      </div>
    </div>
  </div></body></html>`;
  return { html, text: renderText({ name: safeName, email: safeEmail, message }) };
}

// ---- handler ----
export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    // CORS libre si besoin (Vercel gère same-origin par défaut)
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(204).end();
  }
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message, website, t } = req.body || {};
  // Honeypot + tempo anti-bot
  if (website) return res.status(200).json({ success: true });
  if (t && Date.now() - Number(t) < 1500) return res.status(429).json({ error: "Too fast" });
  if (!name || !email || !message) return res.status(400).json({ error: "Missing fields" });

  const {
    GMAIL_USER,
    GMAIL_APP_PASSWORD,
    MAIL_FROM_NAME = "Portfolio Zoe",
    MAIL_TO,
  } = process.env;

  if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
    return res.status(500).json({ error: "SMTP not configured" });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
  });

  try {
    // optionnel, mais utile en debug
    await transporter.verify();
  } catch (e) {
    return res.status(500).json({ error: "SMTP verify failed" });
  }

  const subject = `New message from ${name}`;
  const { html, text } = renderEmail({ name, email, message });

  try {
    await transporter.sendMail({
      from: `"${MAIL_FROM_NAME}" <${GMAIL_USER}>`,
      to: MAIL_TO || GMAIL_USER,
      subject,
      text,
      html,
      replyTo: { name, address: email },
      headers: { "X-Source": "portfolio-contact", "X-Visitor-Email": email },
    });
    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(502).json({ error: "Failed to send email" });
  }
}
