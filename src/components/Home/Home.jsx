import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../UserContext.jsx";

const Home = ({ User }) => {
  const { state, dispatch } = useUserContext();
  const navigate = useNavigate();
  const username = state.currentUser.username;

  return (
    <div className="home">
      {state.currentUser.loggedIn ? (
        <header className="welcome-header">
          <h1>Welcome back, {username}!</h1>
          <p>Ready to get things done?</p>
          <button
            className="jump-to-tasks-button"
            onClick={() => navigate("/tasks")}
          >
            Jump to Tasks
          </button>
        </header>
      ) : (
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
      )}
    </div>
  );
};

export default Home;
