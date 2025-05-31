import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/login">Connexion</Link>
          <Link to="/register">Inscription</Link>
        </nav>

        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<h1>Bienvenue sur ChatGo</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;