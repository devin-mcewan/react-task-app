import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import "./Navbar.css";
import Features from "../Features/Features";
import TaskDashboard from "../TaskDashboard/TaskDashboard";

export default function Navbar() {
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
              <Link to="/tasks">Tasks</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskDashboard />} />
        <Route path="/about" element={<Features />} />
      </Routes>
    </BrowserRouter>
  );
}
