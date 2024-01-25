import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";

const ToDoForm = ({ handleAddNewTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddNewTask(task);
    setTask("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          className="border-2 border-inherit rounded p-1 "
          onChange={(e) => {
            setTask(e.target.value);
          }}
          type="text"
          value={task}
          placeholder="Enter new task"
        />
        <button className="flex items-center border-black  border-2 rounded p-1 font-bold">
          Add task
          <IoMdAdd />
        </button>
      </form>
    </div>
  );
};

export default ToDoForm;
