import React from "react";
import "./style.css";

function RegistrationForm(props) {
  return (
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-8 col-lg-6 col-xl-3">
        <form className="regForm">
          <h2>Create an account!</h2>
          <div className="formField form-group">
            <input
              type="text"
              className="regFont form-control"
              name="username"
              placeholder="Username"
              onChange={props.handleUsernameChange}
            />
          </div>
          <div className="formField form-group">
            <input
              type="email"
              className="regFont form-control"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Email Address"
              onChange={props.handleEmailChange}
            />
          </div>
          <div className="formField form-group">
            <input
              type="password"
              className="regFont form-control"
              name="password"
              placeholder="Password"
              onChange={props.handlePasswordChange}
            />
          </div>
          <div className="formField form-group">
            <input
              type="password"
              className="regFont form-control"
              name="confirm password"
              placeholder="Confirm Password"
              onChange={props.handleConfirmChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={props.register}
          >
            Sign Up
          </button>
          <span className="register">
            {" "}
            Already Registered?{" "}
            <a className="loginLink" href="/login">
              Log In
            </a>
          </span>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
