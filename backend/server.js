const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config(); // Charger les variables d'environnement

const app = express();
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/chatGo';

// Connexion à la base de données
mongoose.connect(DB_URI)
  .then(() => console.log('✅ Connexion à MongoDB réussie !'))
  .catch((error) => console.error('❌ Erreur de connexion à MongoDB :', error));

// Middleware global
app.use(cors()); // Permet les requêtes cross-origin
app.use(bodyParser.json()); // Parser le JSON des requêtes
app.use(bodyParser.urlencoded({ extended: true })); // Parser les formulaires
app.use(morgan('dev')); // Logger les requêtes HTTP

// Route de test
app.get('/', (req, res) => {
  res.send('Bienvenue sur ChatGo !');
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});