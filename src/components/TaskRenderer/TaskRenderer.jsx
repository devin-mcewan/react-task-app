import React from "react";
import "./TaskRenderer.css";
import TaskCreator from "../TaskCreator/TaskCreator.jsx";
import TaskCard from "../TaskCard/TaskCard.jsx";

export default function TaskRenderer({
  dashboardValue,
  onCreate,
  onDelete,
  onClear,
  onLog,
  handleStatus,
  handleToggle,
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
        </div>
        <div className="task-container">
          {tasks
            .filter((task) => task.status === dashboardValue)
            .map((task) => (
              <TaskCard
                task={task}
                handleStatus={handleStatus}
                handleToggle={handleToggle}
                onDelete={onDelete}
              />
            ))}
        </div>
      </div>
    );
    return rendered;
  }
}
