import React from "react";
import "./TaskRenderer.css";
import TaskCreator from "../TaskCreator/TaskCreator.jsx";
import TaskCard from "../TaskCard/TaskCard.jsx";

export default function TaskRenderer({
  dashboardValue,
  onCreate,
  onClear,
  tasks,
}) {
  console.log("Displaying tasks " , tasks);
  let rendered;
  if (dashboardValue === "create-new") {
    rendered = (
      <div>
        <TaskCreator onCreate={onCreate} onClear={onClear} />
      </div>
    );
  } else
    rendered = (
      <div className="task-container">
        <div className="task-container-header">
          <h2>{dashboardValue} tasks</h2>
          <p>Displaying all items marked as {dashboardValue}</p>
        </div>
        {tasks ? (
          tasks.forEach((task) => {
            <TaskCard
              title={task.title}
              description={task.description}
              priority={task.priority}
            />;
          })
        ) : (
          <TaskCard
            title="Title"
            description="Description"
            priority="Priority"
          />
        )}
      </div>
    );

  return rendered;
}
