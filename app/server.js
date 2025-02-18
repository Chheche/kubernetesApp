require('dotenv').config();
const express = require('express');
const { Pool } = require('pg'); // Remplace par 'mysql2' si tu choisis MySQL

const app = express();
const port = 3000;

// Connexion à la base de données
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

app.get('/', (req, res) => {
  res.send('Hello Kubernetes!');
});

// Endpoint pour tester la connexion à la base de données
app.get('/db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ message: 'Connexion réussie', time: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
