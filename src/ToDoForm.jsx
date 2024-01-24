import React, { useState } from "react";

const ToDoForm = ({ handleAddNewTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddNewTask(task);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setTask(e.target.value);
          }}
          type="text"
          placeholder="Enter new task"
        />
        <button>Add task</button>
      </form>
    </div>
  );
};

export default ToDoForm;
