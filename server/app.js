// server/app.js  ✅ version finale
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const contactRoutes = require("./routes/contactRoutes");

// Autorise localhost + TON domaine Vercel (ajoute-en d'autres si besoin)
const ALLOWED = [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://portfolio-q9w4.vercel.app",
  "https://zoecharrier.com",
  "https://portfolio-olive-nine-36.vercel.app/",
];

// CORS global (GET/POST/OPTIONS) – compatible Express 5
app.use(
  cors({
    origin: ALLOWED,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

// Body parser
app.use(express.json({ limit: "64kb" }));

// Logs minimalistes (utile pour debug CORS/latence) — optionnel
app.use((req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path} origin=${req.headers.origin || "-"}`);
  next();
});

// Health
app.get("/", (_req, res) => res.send("OK - Portfolio API"));
app.get("/healthz", (_req, res) => res.json({ ok: true }));

// API
app.get("/api/ping", (_req, res) => res.json({ message: "pong 🏓" }));
app.use("/api/contact", contactRoutes);

// Start
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`✅ Backend listening on port ${PORT}`);
  console.log("   Allowed origins:", ALLOWED);
});
