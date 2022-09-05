import React, { useState } from "react";
import RegistrationForm from "../../components/Registration Form";
import "./style.css"

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  function handleUsernameChange(event) {
    const username = event.target.value;
    setUsername(username);
    console.log(username);
  }

  function handleEmailChange(event) {
    const email = event.target.value;
    setEmail(email);
    console.log(email);
  }

  function handlePasswordChange(event) {
    const password = event.target.value;
    setPassword(password);
    console.log(password);
  }

  function handleConfirmChange(event) {
    const confirm = event.target.value;
    setConfirm(confirm);
    console.log(confirm);
  }

  return (
    <div className="registerBackground">
      <RegistrationForm
        handleUsernameChange={handleUsernameChange}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleConfirmChange={handleConfirmChange}
      />
    </div>
  );
}

export default Register;
