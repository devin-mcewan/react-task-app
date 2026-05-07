import { useState } from "react";
import TaskCreator from "../TaskCreator/TaskCreator";
import TaskRenderer from "../TaskRenderer/TaskRenderer";
import "./TaskDashboard.css";
import { useUserContext } from "../UserContext";
export default function TaskDashboard() {
  //dashboard is a value used to update the ID of each header.
  // dashboard keeps track of the desired task list a user is trying to view
  const [dashboard, setDashboard] = useState("New");
  const { state } = useUserContext();
  let rendered;
  if (state.currentUser.loggedIn) {
    rendered = (
      <div className="task-dashboard">
        <div className="dashboard-selection">
          <button
            className={`dashboard-tab ${dashboard === "New" ? "selected" : ""}`}
            onClick={() => setDashboard("New")}
          >
            <span className="tab-dot new" />
            New
            <span
              className={`tab-count ${dashboard === "New" ? "selected" : ""}`}
            >
              {state.tasks.filter((t) => t.status === "New").length}
            </span>
          </button>

          <button
            className={`dashboard-tab ${dashboard === "In Progress" ? "selected" : ""}`}
            onClick={() => setDashboard("In Progress")}
          >
            <span className="tab-dot progress" />
            In Progress
            <span
              className={`tab-count ${dashboard === "In Progress" ? "selected" : ""}`}
            >
              {state.tasks.filter((t) => t.status === "In Progress").length}
            </span>
          </button>

          <button
            className={`dashboard-tab ${dashboard === "Completed" ? "selected" : ""}`}
            onClick={() => setDashboard("Completed")}
          >
            <span className="tab-dot completed" />
            Completed
            <span
              className={`tab-count ${dashboard === "Completed" ? "selected" : ""}`}
            >
              {state.tasks.filter((t) => t.status === "Completed").length}
            </span>
          </button>

          <button
            className={`dashboard-tab create-tab ${dashboard === "create-new" ? "selected" : ""}`}
            onClick={() => setDashboard("create-new")}
          >
            + Create New
          </button>
        </div>
        <div className="task-display">
          <TaskRenderer dashboardValue={dashboard} />
        </div>
      </div>
    );
  } else {
    rendered = <h1 className="unauthorized">Login first!</h1>;
  }
  return rendered;
}
