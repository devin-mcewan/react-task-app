import React from "react";
import "./TaskRenderer.css";
import TaskCreator from "../TaskCreator/TaskCreator.jsx";

export default function TaskRenderer({ dashboardValue, onCreate }) {
  let rendered;
  if (dashboardValue === "create-new") {
    rendered = (
      <div>
        <TaskCreator onCreate={onCreate} />
      </div>
    );
  } else
    rendered = (
      <div className="task-container">
        <div className="task-container-header">
          <h2>{dashboardValue} tasks</h2>
          <p>Displaying all items marked as {dashboardValue}</p>
        </div>
        <div className="task-card-container"></div>
      </div>
    );

  return rendered;
}
