import React from "react";
import "./TaskCard.css";
export default function TaskCard({
  task,
  isDemo,
  handleStatus,
  onDelete,
  handleToggle,
}) {
  return (
    <div className="task-card">
      <h3>{task.title ? task.title : "Title"}</h3>
      <p>{task.description ? task.description : "Description"}</p>
      <p>
        <strong>{task.priority ? task.priority : "Priority"}</strong>
      </p>
      {isDemo ? (
        <div></div>
      ) : (
        <div className="task-card-button-container">
          <button id="delete" onClick={() => onDelete(task)}>
            DELETE
          </button>
          {task.status === "New" ? (
            <button
              className="status"
              id="start"
              onClick={() => handleStatus(task)}
            >
              START
            </button>
          ) : task.status === "In Progress" ? (
            <div>
              <button
                className="postpone"
                onClick={() => {
                  const postpone = true;
                  handleStatus(task, postpone);
                }}
              >
                POSTPONE
              </button>
              <button className="toggle" onClick={() => handleToggle(task)}>
                {task.pause ? "RESUME" : "PAUSE"}
              </button>
              <button
                className="status"
                id="complete"
                onClick={() => handleStatus(task)}
              >
                COMPLETE
              </button>
            </div>
          ) : (
            <button
              className="status"
              id="reset"
              onClick={() => handleStatus(task)}
            >
              OPEN TASK
            </button>
          )}
        </div>
      )}
    </div>
  );
}
