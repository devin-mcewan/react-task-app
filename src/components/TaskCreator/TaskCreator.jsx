import React from "react";
import { useState } from "react";
import "./TaskCreator.css";
import TaskCard from "../TaskCard/TaskCard";

export default function InputContainer({ onCreate, onClear }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");

  return (
    <div className="tasks">
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          placeholder="Create a new task..."
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          placeholder="Define the task..."
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label htmlFor="priority">Priority</label>
        <select
          id="priority"
          name="priorities"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button
          className="add-task-button"
          onClick={() => {
            onCreate(title, description, priority);
            setTitle("");
            setDescription("");
          }}
        >
          Add Task
        </button>
      </div>
      <button onClick={() => onClear()}>Clear all tasks</button>
      <TaskCard />
    </div>
  );
}
