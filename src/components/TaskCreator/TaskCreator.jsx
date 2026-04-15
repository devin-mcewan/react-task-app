import React from "react";
import { useState } from "react";
import "./TaskCreator.css";
import TaskCard from "../TaskCard/TaskCard";

export default function InputContainer({ onCreate, onClear, onLog }) {
  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
    priority: "Low",
  });
  return (
    <div className="tasks">
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Create a new task..."
          id="title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          placeholder="Define the task..."
          id="description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
        <label htmlFor="priority">Priority</label>
        <select
          id="priority"
          name="priorities"
          value={task.priority}
          onChange={(e) => setTask({ ...task, priority: e.target.value })}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button
          className="add-task-button"
          onClick={() => {
            setTask({ ...task, id: Date.now() });
            onCreate(task);
            setTask({ id: "", title: "", description: "", priority: "Low" });
          }}
        >
          Add Task
        </button>
      </div>
      {/* DEBUG BUTTONS */}
      {/* Clear all tasks button */}
      <button
        className="clear"
        onClick={() => {
          onClear();
          alert("tasks cleared");
        }}
      >
        CLEAR ALL TASKS
      </button>
      {/* Show tasks debug button */}
      {/* <button
        className="show"
        onClick={() => {
          onLog();
        }}
      >
        SHOW TASKS
      </button> */}

      {/* Demo Task Card */}
      <h2>Task Card Preview</h2>
      <TaskCard
        title={task.title}
        description={task.description}
        priority={task.priority}
        isDemo={true}
      />
    </div>
  );
}
