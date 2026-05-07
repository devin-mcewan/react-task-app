import React, { useEffect } from "react";
import "./TaskRenderer.css";
import TaskCreator from "../TaskCreator/TaskCreator.jsx";
import TaskCard from "../TaskCard/TaskCard.jsx";
import { useUserContext } from "../UserContext.jsx";

export default function TaskRenderer({ dashboardValue, handleToggle }) {
  const { state, dispatch } = useUserContext();
  useEffect(() => {}, [state.tasks]);
  const currentUser = state.users.find((user) =>
    user.loggedIn === true ? user.username : null,
  );

  let rendered;
  if (dashboardValue === "create-new") {
    rendered = (
      <div>
        <TaskCreator />
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
          {state.tasks
            .filter((task) => task.status === dashboardValue)
            .map((task) => (
              <TaskCard task={task} handleToggle={handleToggle} />
            ))}
        </div>
      </div>
    );
    return rendered;
  }
}
