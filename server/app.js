// File: server/app.js  (version sans helmet)
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const contactRoutes = require("./routes/contactRoutes");

const ORIGIN = process.env.ALLOWED_ORIGIN || "http://localhost:5173";

app.use(
  cors({
    origin: ORIGIN,
    methods: ["POST", "GET", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json({ limit: "64kb" }));

app.get("/api/ping", (_req, res) => res.json({ message: "pong 🏓" }));
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`✅ Backend on http://localhost:${PORT} (origin: ${ORIGIN})`);
});

