import React from "react";
import "./TaskCard.css";
export default function TaskCard({ title, description, priority, isDemo }) {
  return (
    <div className="task-card">
      <h3>{title ? title : "Title"}</h3>
      <p>{description ? description : "Description"}</p>
      <p>
        <strong>{priority ? priority : "Priority"}</strong>
      </p>
      {isDemo ? (
        <div></div>
      ) : (
        <div className="task-card-button-container">
          <button id="delete">DELETE</button>
          <button id="start">START</button>
        </div>
      )}
    </div>
  );
}
