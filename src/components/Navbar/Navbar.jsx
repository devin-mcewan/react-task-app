import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import "./Navbar.css";
import Features from "../Features/Features";
import TaskDashboard from "../TaskDashboard/TaskDashboard";
import { useState } from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import { useUserContext } from "../UserContext";

export default function Navbar() {
  const { state, dispatch } = useUserContext();

  const [users, setUsers] = useState([
    { username: "test", password: "test", loggedIn: false },
    { username: "devin", password: "password", loggedIn: false },
  ]);
  const [User, setUser] = useState({
    loggedIn: false,
  });

  // const handleCreateUser = (user) => {
  //   if (!user.username) {
  //     return "Username Error";
  //   } else if (!user._password) {
  //     console.error("No Password");
  //     return "Password Error";
  //   } else if (!user._confirmedPassword) {
  //     return "Confirmed Password Error";
  //   } else if (user._password !== user._confirmedPassword) {
  //     return "Passwords Mismatched";
  //   } else {
  //     // If all fields are valid, we create the user and log them in immediately.
  //     setUsers(
  //       (prev) => [
  //         ...prev,
  //         { username: user.username, password: user._password, loggedIn: true },
  //       ],
  //       // After creating the user, we want to log them in immediately.
  //       setUser({
  //         ...User,
  //         username: user.username,
  //         loggedIn: true,
  //       }),
  //     );

  //     return "Success";
  //   }
  // };

  const handleLogin = (user) => {
    let loginStatus = false;
    const username = user.username;
    const password = user._password;
    users.find((u) => u.username === username) &&
    users.find((u) => u.password === password)
      ? (console.log("Login successful"),
        setUser({
          ...User,
          username: username,
          loggedIn: true,
        }),
        (loginStatus = true))
      : (console.log("Login failed"), (loginStatus = false));
    return loginStatus;
  };

  const handleLogout = () => {
    setUser({
      ...User,
      loggedIn: false,
    });
  };

  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="navbar-logo">MŌdl</h1>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            {state.currentUser.loggedIn ? (
              <div className="additional-items">
                <li className="nav-item">
                  <Link to="/tasks">Tasks</Link>
                </li>
                <li
                  className="nav-item"
                  id="logout-button"
                  onClick={() => dispatch({ type: "LOGOUT" })}
                >
                  <Link to="/">Sign Out</Link>
                </li>
              </div>
            ) : (
              <li className="nav-item" id="login-button">
                <Link to="/login">Log In</Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home User={User} />} />
        <Route path="/tasks" element={<TaskDashboard />} />
        <Route path="/about" element={<Features />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
