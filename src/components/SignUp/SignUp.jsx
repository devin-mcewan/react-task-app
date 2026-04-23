import React from "react";
import "./SignUp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp({ handleCreate }) {
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
            let result = handleCreate(user);
            result === "Username Error"
              ? alert("Error creating account: Username is required")
              : result === "Password Error"
                ? alert("Error creating account: Password is required")
                : result === "Confirmed Password Error"
                  ? alert(
                      "Error creating account: Please confirm your password",
                    )
                  : result === "Passwords Mismatched"
                    ? alert("Error creating account: Passwords do not match")
                    : (alert("Account created successfully!"),
                      navigate("/tasks"));
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
