import React from "react";
import "./TaskCard.css";
import { useUserContext } from "../UserContext";
export default function TaskCard({ task, isDemo }) {
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
              onClick={() =>
                dispatch({
                  type: "TOGGLE_STATUS",
                  payload: { currentTask: task, postpone: false },
                })
              }
            >
              START
            </button>
          ) : task.status === "In Progress" ? (
            <div className="additional-buttons-container">
              <button
                className="postpone"
                onClick={() => {
                  dispatch({
                    type: "TOGGLE_STATUS",
                    payload: { currentTask: task, postpone: true },
                  });
                }}
              >
                POSTPONE
              </button>
              <button
                className="toggle"
                onClick={() =>
                  dispatch({
                    type: "TOGGLE_SUSPEND",
                    payload: { currentTask: task },
                  })
                }
              >
                {task.suspended ? "RESUME" : "PAUSE"}
              </button>
              <button
                className="status"
                id="complete"
                onClick={() =>
                  dispatch({
                    type: "TOGGLE_STATUS",
                    payload: { currentTask: task, postpone: false },
                  })
                }
              >
                COMPLETE
              </button>
            </div>
          ) : (
            <button
              className="status"
              id="reset"
              onClick={() =>
                dispatch({
                  type: "TOGGLE_STATUS",
                  payload: { currentTask: task, postpone: false },
                })
              }
            >
              OPEN TASK
            </button>
          )}
        </div>
      )}
    </div>
  );
}
