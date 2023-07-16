import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const handleLogin = (e) => {
    // Perform login logic, e.g., validate email and password
    // Assuming successful login for demonstration purposes
    localStorage.setItem("token", "your_token_here");
    setIsAuthenticated(true);

    console.log(isAuthenticated);
    history.replace("home");
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
