import React from "react";
import '../styles/Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form>
          <input type="email" placeholder="Email" /><br /><br />
          <input type="password" placeholder="Password" /><br /><br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
