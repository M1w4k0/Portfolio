const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const contactRoutes = require("./routes/contactRoutes");

// CORS: autorise local + origines de prod (liste via ALLOWED_ORIGIN, séparée par virgules)
const ALLOWED = ["http://localhost:3000", "http://localhost:5173", "https://portfolio-officiel-sable.vercel.app",];

app.use(cors({ origin: ALLOWED }));
app.options("*", cors({ origin: ALLOWED }));

app.use(express.json({ limit: "64kb" }));

// Roots utiles (Render health check, debug)
app.get("/", (_req, res) => res.send("OK - Portfolio API"));
app.get("/healthz", (_req, res) => res.json({ ok: true }));

// API
app.get("/api/ping", (_req, res) => res.json({ message: "pong 🏓" }));
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`✅ Backend listening on port ${PORT}`);
  console.log("   Allowed origins:", ALLOWED);
});
