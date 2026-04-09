import { useState } from "react";
import TaskCreator from "../TaskCreator/TaskCreator";
import TaskRenderer from "../TaskRenderer/TaskRenderer";
import "./TaskDashboard.css";

export default function TaskDashboard() {
  const [tasks, setTasks] = useState([]);
  //dashboard is a value used to update the ID of each header.
  // dashboard keeps track of the desired task list a user is trying to view
  const [dashboard, setDashboard] = useState("New");

  // const newTasks = tasks.filter((task) => task.status === "created");
  const createTask = (title, description, priority) => {
    console.log("Title: " + title);
    console.log("Description: " + description);
    console.log("Priority: " + priority);
    if (!title || !description || !priority) {
      alert("Please complete all fields");
    }
    console.log("success");
    setTasks((prev) => [
      ...prev,
      { title, description, priority, status: "created" },
    ]);
  };

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
        <TaskRenderer dashboardValue={dashboard} onCreate={createTask} />
      </div>
    </div>
  );
}
