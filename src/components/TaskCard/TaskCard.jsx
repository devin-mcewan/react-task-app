import React from "react";
import "./TaskCard.css";
export default function TaskCard() {
  return (
    <div className="task-card-container">
      <h3>Task Title</h3>
      <p>Task Description</p>
      <p>Task Priority</p>
      <div className="task-button-container">
        <button id="delete">DELETE</button>
        <button id="start">START</button>
      </div>
    </div>
  );
}
