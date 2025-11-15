// File: server/app.js  (version sans helmet)
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const contactRoutes = require("./routes/contactRoutes");


const ALLOWED = [
  "http://localhost:3000",
  process.env.ALLOWED_ORIGIN,
].filter(Boolean);

app.use(cors({
origin: (origin, cb) => {
      // autorise aussi les requêtes sans origin (curl/healthchecks)
      if (!origin || ALLOWED.includes(origin)) return cb(null, true);
      return cb(new Error("CORS"));
    },  methods: ["POST", "GET", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
}));


app.use(express.json({ limit: "64kb" }));

app.get("/api/ping", (_req, res) => res.json({ message: "pong 🏓" }));
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`✅ Backend on http://localhost:${PORT} (origin: ${ORIGIN})`);
});

