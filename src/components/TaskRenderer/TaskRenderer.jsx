import React, { useEffect } from "react";
import "./TaskRenderer.css";
import TaskCreator from "../TaskCreator/TaskCreator.jsx";
import TaskCard from "../TaskCard/TaskCard.jsx";
import { useUserContext } from "../UserContext.jsx";

export default function TaskRenderer({ dashboardValue }) {
  const { state, dispatch } = useUserContext();
  useEffect(() => {}, [state.tasks]);
  let rendered;
  if (dashboardValue === "create-new") {
    rendered = (
      <div>
        <TaskCreator />
      </div>
    );
    return rendered;
  } else {
    if (
      state.tasks.filter((task) => task.status === dashboardValue).length === 0
    ) {
      rendered = (
        <div className="task-container">
          <h1>No {dashboardValue} Tasks to Display</h1>
        </div>
      );
    } else {
      rendered = (
        <div className="task-container">
          {state.tasks
            .filter((task) => task.status === dashboardValue)
            .map((task) => (
              <TaskCard task={task} />
            ))}
        </div>
      );
    }
    return rendered;
  }
}
