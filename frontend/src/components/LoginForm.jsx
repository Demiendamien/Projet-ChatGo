import React, { useState } from "react";
import axios from "axios";

// Composant de formulaire de connexion
const LoginForm = () => {
  // État pour stocker les valeurs du formulaire
  const [formData, setFormData] = useState({ email: "", password: "" });
  // État pour gérer les messages d'erreur
  const [error, setError] = useState("");

  // Gère la modification des champs du formulaire
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Gère la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    try {
      // Envoie une requête POST à l'API de connexion avec les données du formulaire
      const response = await axios.post("http://localhost:3000/api/auth/login", formData);
      // Stocke le token reçu dans le localStorage
      localStorage.setItem("token", response.data.token);
      alert("Connexion réussie !");
    } catch (err) {
      // Affiche un message d'erreur en cas d'échec
      setError(err.response?.data?.message || "Erreur de connexion");
    }
  };

  return (
    <div className="login-container">
      <h2>Connexion</h2>
      {/* Affiche le message d'erreur s'il existe */}
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Email :</label>
        {/* Champ de saisie pour l'email */}
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        
        <label>Mot de passe :</label>
        {/* Champ de saisie pour le mot de passe */}
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        
        {/* Bouton de soumission */}
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default LoginForm;