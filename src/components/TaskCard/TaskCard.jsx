import React from "react";
import "./TaskCard.css";
import { useUserContext } from "../UserContext";
export default function TaskCard({ task, isDemo, handleToggle }) {
  const { state, dispatch } = useUserContext();
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
          <button
            id="delete"
            onClick={() => {
              if (confirm("Are you sure you want to delete this task?")) {
                dispatch({ type: "DELETE_TASK", payload: task });
              }
            }}
          >
            DELETE
          </button>
          {task.status === "New" ? (
            <button
              className="status"
              id="start"
              onClick={() => dispatch({ type: "TOGGLE_STATUS", payload: task })}
            >
              START
            </button>
          ) : task.status === "In Progress" ? (
            <div className="additional-buttons-container">
              <button
                className="postpone"
                onClick={() => {
                  const postpone = true;
                  // dispatch({ type: "TOGGLE_STATUS", payload: task });
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
                onClick={() =>
                  dispatch({ type: "TOGGLE_STATUS", payload: task })
                }
              >
                COMPLETE
              </button>
            </div>
          ) : (
            <button
              className="status"
              id="reset"
              onClick={() => dispatch({ type: "TOGGLE_STATUS", payload: task })}
            >
              OPEN TASK
            </button>
          )}
        </div>
      )}
    </div>
  );
}
