const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all projects
router.get('/', (req, res) => {
  db.query('SELECT * FROM projects', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// POST a new project
router.post('/', (req, res) => {
  const { title, description, technologies, github_url, live_demo_url, image_url } = req.body;
  db.query(
    'INSERT INTO projects (title, description, technologies, github_url, live_demo_url, image_url) VALUES (?, ?, ?, ?, ?, ?)',
    [title, description, technologies, github_url, live_demo_url, image_url],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.status(201).json({ id: result.insertId, ...req.body });
    }
  );
});

module.exports = router;
