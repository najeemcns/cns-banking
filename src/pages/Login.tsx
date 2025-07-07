// Login.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/login.css";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    setTimeout(() => {
      localStorage.setItem("authToken", "your-token");
      navigate("/");
    }, 1500);
  };

  const handleRegister = () => {
    alert("Redirect to Register Page"); // Replace with actual navigation
  };

  return (
    <div className="login-container">
      <div className="top-half-bg" />
      <div className="login-content">
        <img src="/logobanking.png" alt="Bank Logo" className="bank-logo" />
        <h2 className="bank-title">Secure Login</h2>

        <div className="input-group">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="input-field"
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="input-field"
          />
        </div>

        <button className="login-btn" onClick={handleLogin}>
          Log in
        </button>

        <button className="register-btn" onClick={handleRegister}>
          Register
        </button>

        <p className="register-text">Don’t have an account yet?</p>
      </div>
    </div>
  );
};

export default Login;
