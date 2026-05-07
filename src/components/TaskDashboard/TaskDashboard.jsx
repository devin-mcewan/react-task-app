import { useState } from "react";
import TaskCreator from "../TaskCreator/TaskCreator";
import TaskRenderer from "../TaskRenderer/TaskRenderer";
import "./TaskDashboard.css";
export default function TaskDashboard() {
  //dashboard is a value used to update the ID of each header.
  // dashboard keeps track of the desired task list a user is trying to view
  const [dashboard, setDashboard] = useState("New");
  const [tasks, setTasks] = useState([]);
  // const newTasks = tasks.filter((task) => task.status === "new");  };

  // "Toggle" is referring to the tasks "Pause/Resume" status.
  const handleToggle = (task) => {
    const currentTask = tasks.find((t) => t.id === task.id);
    currentTask.pause = !currentTask.pause;
    setTasks([...tasks]);
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
        <TaskRenderer
          tasks={tasks}
          dashboardValue={dashboard}
          handleToggle={handleToggle}
        />
      </div>
    </div>
  );
}
