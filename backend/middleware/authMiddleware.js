const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];

  if (!token) return res.status(403).json({ message: "Accès refusé. Token manquant." });

  jwt.verify(token.split(" ")[1], process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Token invalide ou expiré." });

    req.userId = decoded.id; // Ajoute l'ID utilisateur au `req`
    next(); // Passe à l'étape suivante
  });
};

module.exports = verifyToken;