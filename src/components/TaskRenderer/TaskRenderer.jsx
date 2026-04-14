import React from "react";
import "./TaskRenderer.css";
import TaskCreator from "../TaskCreator/TaskCreator.jsx";
import TaskCard from "../TaskCard/TaskCard.jsx";

export default function TaskRenderer({
  dashboardValue,
  onCreate,
  onClear,
  onLog,
  tasks,
}) {
  let rendered;
  if (dashboardValue === "create-new") {
    rendered = (
      <div>
        <TaskCreator onCreate={onCreate} onClear={onClear} onLog={onLog} />
      </div>
    );
    return rendered;
  } else if (dashboardValue === "New") {
    rendered = (
      <div className="task-container">
        <div className="task-container-header">
          <h2>{dashboardValue} tasks</h2>
          <p>Displaying all items marked as {dashboardValue}</p>
        </div>
        <div className="task-card-container">
          {tasks.forEach((task) => {
            console.log("Task loop running");
            <TaskCard
              title={task.title}
              description={task.description}
              priority={task.priority}
            />;
          })}
        </div>
      </div>
    );
    return rendered;
  }
}
