import React, { useState } from "react";
import LoginForm from "../../components/Login Form";
import "./style.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameChange(event) {
    const username = event.target.value;
    setUsername(username);
    console.log(username);
  }

  function handlePasswordChange(event) {
    const password = event.target.value;
    setPassword(password);
    console.log(password);
  }

  return (
    <div className="loginBackground">
      <LoginForm
        handleUsernameChange={handleUsernameChange}
        handlePasswordChange={handlePasswordChange}
        // login={login}
      />
    </div>
  );
}

export default Login;
