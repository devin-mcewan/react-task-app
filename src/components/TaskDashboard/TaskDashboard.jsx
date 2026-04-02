import { useState } from "react";
import TaskCreator from "../TaskCreator/TaskCreator";
import TaskRenderer from "../TaskRenderer/TaskRenderer";
import "./TaskDashboard.css";

export default function TaskDashboard() {
  const [tasks, setTasks] = useState([]);
  const [dashboard, setDashboard] = useState("new");

  const newTasks = tasks.filter((task) => task.status === "created");
  const inProgressTasks = tasks.filter((task) => task.status === "in progress");
  const completedTasks = tasks.filter((task) => task.status === "completed");
  const handleCreateTask = (newTask) => {
    setTasks([...tasks, { ...newTask, status: "created" }]);
  };

  return (
    <div className="task-dashboard">
      <div className="dashboard-selection">
        <h2 className="new" onClick={() => setDashboard("New")}>
          New
        </h2>
        <h2 className="in-progress" onClick={() => setDashboard("In Progress")}>
          In Progress
        </h2>
        <h2 className="completed" onClick={() => setDashboard("Completed")}>
          Completed
        </h2>
        <h2 className="create-new">+ Create New</h2>
      </div>
      <div>
        <TaskRenderer dashboardValue={dashboard} />
      </div>
    </div>
  );
}
