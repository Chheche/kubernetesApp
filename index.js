require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const PORT = 5000;

// Active CORS pour éviter les erreurs de cross-origin
app.use(cors());

// Connexion à la base de données MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,   // Défini dans .env
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306
});

db.connect(err => {
  if (err) {
    console.error('Erreur de connexion MySQL :', err);
  } else {
    console.log('Connecté à MySQL !');
  }
});

// Route de test
app.get('/', (req, res) => {
  res.send('Hello depuis Express');
});

// Test de la connexion à la base
app.get('/test-db', (req, res) => {
  db.query('SELECT NOW()', (err, result) => {
    if (err) {
      res.status(500).send('Erreur avec la BDD');
    } else {
      res.send(`Connexion OK : ${JSON.stringify(result)}`);
    }
  });
});

// Démarrer le serveur
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Serveur démarré sur http://0.0.0.0:${PORT}`);
});
