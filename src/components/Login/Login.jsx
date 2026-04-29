import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../UserContext";

export default function Login({ handleLogin }) {
  const { state, dispatch } = useUserContext();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "Username",
    _password: "Password",
  });

  return (
    <div className="LoginContainer">
      <div className="login">
        <h1>WELCOME BACK!</h1>
        <h2>LOG IN</h2>
        <label className="form-label" htmlFor="username">
          Username
        </label>

        <input
          type="text"
          className="username"
          value={user.username ? user.username : ""}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        ></input>
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          className="password"
          placeholder="Enter your password..."
          value={user._password ? user._password : ""}
          onChange={(e) => setUser({ ...user, _password: e.target.value })}
        ></input>
        <button
          className="login-button"
          onClick={() => {
            dispatch({ type: "LOGIN", payload: user });
            navigate("/tasks");
          }}
          // onClick={() => {
          //   handleLogin(user) === false
          //     ? alert("Loggin Error")
          //     : (alert("Logged in successfully!"), navigate("/tasks"));
          // }}
        >
          Log In
        </button>
        <p className="signup-link">
          Don't have an account? <a href="/sign-up">Sign Up</a>
        </p>
      </div>
      <div className="feature-container">
        <h2>Features</h2>
      </div>
    </div>
  );
}
