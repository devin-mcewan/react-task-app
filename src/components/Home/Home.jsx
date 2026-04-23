import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = ({ User }) => {
  const navigate = useNavigate();
  return (
    <div className="home">
      {User.loggedIn === false ? (
        <header className="home-header">
          <h1>Welcome to MŌdl</h1>
          <p>The ultimate solution to get things done</p>
          <button
            className="get-started-button"
            onClick={() => navigate("/sign-up")}
          >
            Get Started!
          </button>
        </header>
      ) : (
        <header className="welcome-header">
          <h1>Welcome back, {User.username}!</h1>
          <p>Ready to get things done?</p>
          <button
            className="jump-to-tasks-button"
            onClick={() => navigate("/tasks")}
          >
            Jump to Tasks
          </button>
        </header>
      )}
    </div>
  );
};

export default Home;
