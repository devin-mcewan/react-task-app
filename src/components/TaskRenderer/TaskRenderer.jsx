import React from "react";
import "./TaskRenderer.css";

export default function TaskRenderer({ dashboardValue }) {
  return (
    <div>
      <div className="task-container">
        <h2>{dashboardValue} tasks</h2>
        <p>Displaying all items marked as {dashboardValue}</p>
      </div>
    </div>
  );
}
