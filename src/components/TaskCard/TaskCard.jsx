import React from "react";
import "./TaskCard.css";
export default function TaskCard({ title, description, priority }) {
  return (
    <div className="task-card-container">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{priority}</p>
      <div className="task-button-container">
        <button id="delete">DELETE</button>
        <button id="start">START</button>
      </div>
    </div>
  );
}
