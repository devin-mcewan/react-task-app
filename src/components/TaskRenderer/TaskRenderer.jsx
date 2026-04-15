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
  } else {
    rendered = (
      <div className="task-page">
        <div className="task-page-header">
          <h2>{dashboardValue} tasks</h2>
          <p>Displaying all items marked as {dashboardValue}</p>
        </div>
        <div className="task-container">
          {tasks
            .filter((task) => task.status === dashboardValue)
            .map((task) => (
              <TaskCard
                key={task.id}
                title={task.title}
                description={task.description}
                priority={task.priority}
              />
            ))}
        </div>
      </div>
    );
    return rendered;
  }
}
