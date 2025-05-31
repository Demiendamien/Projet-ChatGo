import React, { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Réinitialisation des erreurs

    try {
      const response = await axios.post("http://localhost:3000/api/auth/register", formData);
      setSuccess("Inscription réussie !");
      setFormData({ username: "", email: "", password: "" }); // Réinitialisation du formulaire
    } catch (err) {
      setError(err.response?.data?.message || "Erreur lors de l'inscription");
    }
  };

  return (
    <div className="register-container">
      <h2>Inscription</h2>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
      <form onSubmit={handleSubmit}>
        <label>Nom d'utilisateur :</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />

        <label>Email :</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Mot de passe :</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default RegisterForm;