const express = require("express");
const verifyToken = require("../middlewares/authMiddleware"); // Import du middleware

const router = express.Router();

router.get("/profile", verifyToken, async (req, res) => {
  res.json({ message: "Profil sécurisé accessible", userId: req.userId });
});

module.exports = router;