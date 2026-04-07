import React from "react";
import "./TaskRenderer.css";
import TaskCreator from "../TaskCreator/TaskCreator.jsx";

export default function TaskRenderer({ dashboardValue }) {
  let rendered;
  if (dashboardValue === "create-new") {
    rendered = (
      <div>
        <TaskCreator />
      </div>
    );
  } else
    rendered = (
      <div className="task-container">
        <h2>{dashboardValue} tasks</h2>
        <p>Displaying all items marked as {dashboardValue}</p>
      </div>
    );

  return rendered;
}
