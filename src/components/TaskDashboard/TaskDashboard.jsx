import { useState } from "react";
import TaskCreator from "../TaskCreator/TaskCreator";
import TaskRenderer from "../TaskRenderer/TaskRenderer";
import "./TaskDashboard.css";

export default function TaskDashboard() {
  const [tasks, setTasks] = useState([]);
  //dashboard is a value used to update the ID of each header.
  // dashboard keeps track of the desired task list a user is trying to view
  const [dashboard, setDashboard] = useState("New");

  // const newTasks = tasks.filter((task) => task.status === "new");
  const createTask = (task) => {
    if (!task.title || !task.description || !task.priority) {
      alert("Please complete all fields");
      return;
    }
    setTasks((prev) => [...prev, { ...task, status: "New", id: Date.now() }]);
  };

  const handleTaskStatus = (task, postpone) => {
    const currentTask = tasks.find((t) => t.id === task.id);
    if (currentTask.status === "New") {
      console.log("starting task: " + currentTask.id);
      currentTask.status = "In Progress";
      currentTask.pause = false;
    } else if (currentTask.status === "In Progress") {
      postpone
        ? (currentTask.status = "New")
        : (currentTask.status = "Completed");
      currentTask.pause = false;
    } else {
      currentTask.status = "In Progress";
      currentTask.pause = false;
    }
    setTasks([...tasks]);
  };

  // "Toggle" is referring to the tasks "Pause/Resume" status.
  const handleToggle = (task) => {
    const currentTask = tasks.find((t) => t.id === task.id);
    currentTask.pause = !currentTask.pause;
    setTasks([...tasks]);
  };

  const deleteTask = (task) => {
    const currentTask = tasks.find((t) => t.id === task.id);
    const confirmed = window.confirm(
      "Are you sure you want to delete this task?",
    );
    if (!confirmed) {
      return;
    } else {
      console.log("deleting task: " + currentTask.title);
      tasks.splice(tasks.indexOf(currentTask), 1);
      setTasks([...tasks]);
    }
  };
  const logTasks = () => {
    tasks.forEach((task) => {
      console.log("Task Title: " + task.title);
      console.log("Task Description: " + task.description);
      console.log("Task Priority: " + task.priority);
      console.log("Task Status: " + task.status);
    });
  };

  const eraseTasks = () => {
    console.log("clearing all tasks");
    setTasks([]);
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
          onCreate={createTask}
          onDelete={deleteTask}
          onClear={eraseTasks}
          onLog={logTasks}
          handleStatus={handleTaskStatus}
          handleToggle={handleToggle}
        />
      </div>
    </div>
  );
}
