import { useState } from "react";
import TaskCreator from "../TaskCreator/TaskCreator";
import TaskRenderer from "../TaskRenderer/TaskRenderer";
import "./TaskDashboard.css";

export default function TaskDashboard() {
  //   const [tasks, setTasks] = useState([]);
  const [dashboard, setDashboard] = useState("new");

  //   const newTasks = tasks.filter((task) => task.status === "created");
  //   const inProgressTasks = tasks.filter((task) => task.status === "in progress");
  //   const completedTasks = tasks.filter((task) => task.status === "completed");
  //   const addTask = (title, description) => {
  //     setTasks([...tasks, { title, description, status: "created" }]);
  //   };

  return (
    <div className="task-dashboard">
      <div className="dashboard-selection">
        <h2
          onClick={() => setDashboard("New")}
          id={dashboard === "New" ? "Selected" : "Unselected"}
        >
          New
        </h2>
        <h2
          onClick={() => setDashboard("In Progress")}
          id={dashboard === "In Progress" ? "Selected" : "Unselected"}
        >
          In Progress
        </h2>
        <h2
          onClick={() => setDashboard("Completed")}
          id={dashboard === "Completed" ? "Selected" : "Unselected"}
        >
          Completed
        </h2>
        <h2
          onClick={() => setDashboard("create-new")}
          id={dashboard === "create-new" ? "Selected" : "Unselected"}
        >
          + Create New
        </h2>
      </div>
      <div className="task-display">
        <TaskRenderer dashboardValue={dashboard} />
      </div>
    </div>
  );
}
