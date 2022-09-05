import React from "react";
import "./style.css";

function LoginForm(props) {
  return (
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-8 col-lg-6 col-xl-3">
        <form className="loginForm">
          <h2>Log in here!</h2>
          <div className="formField form-group">
            <input
              type="text"
              className="form-control"
              name="username"
              placeholder="Username"
              onChange={props.handleUsernameChange}
            />
          </div>
          <div className="formField form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              onChange={props.handlePasswordChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={props.login}
          >
            Log In
          </button>
          <span className="register">
            {" "}
            Don't have an account?{" "}
            <a className="signupLink" href="/register">
              Sign Up
            </a>
          </span>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
