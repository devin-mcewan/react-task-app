import React from "react";
import "./SignUp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../UserContext";

export default function SignUp() {
  const { state, dispatch } = useUserContext();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    _password: "",
    _confirmedPassword: "",
    loggedIn: false,
  });
  return (
    <div className="SignUpContainer">
      <div className="signUp">
        <h1>Welcome to Modal!</h1>
        <h2>Sign Up</h2>
        <label className="form-label" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          className="username"
          autoFocus
          value={user.username ? user.username : ""}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        ></input>
        <label className="form-label" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="password"
          value={user._password ? user._password : ""}
          onChange={(e) => setUser({ ...user, _password: e.target.value })}
        ></input>
        <label className="form-label" htmlFor="password">
          Confirm Your Password
        </label>
        <input
          id="confirm-password"
          type="password"
          className="password"
          value={user._confirmedPassword ? user._confirmedPassword : ""}
          onChange={(e) =>
            setUser({ ...user, _confirmedPassword: e.target.value })
          }
        ></input>
        <button
          className="create-account-button"
          onClick={() => {
            setUser({ ...user, userID: Date.now() });
            if (!user.username || !user._password) {
              alert("Please enter a Username or Password");
            } else if (user._password !== user._confirmedPassword) {
              alert(
                "Passwords do not match, please check your passwords and try again",
              );
              return;
            } else {
              dispatch({ type: "CREATE_USER", payload: user });
              navigate("/tasks");
            }
          }}
        >
          Create Account
        </button>
        <p className="login-link">
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
      <div className="feature-container">
        <h2>Features</h2>
      </div>
    </div>
  );
}
