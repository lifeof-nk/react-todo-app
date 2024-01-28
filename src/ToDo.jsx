import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdDoneAll } from "react-icons/io";

const ToDo = ({ task, onDeleteTask, id, completed, onComplete }) => {
  return (
    <div className="flex p-1 border-2 mt-2 justify-between ">
      <div className={`${completed ? "line-through" : ""}`}>{task}</div>
      <div className="flex items-center">
        <button
          className="ml-5"
          onClick={() => {
            onComplete(id);
          }}
        >
          <IoMdDoneAll />
        </button>

        <button
          className="ml-5"
          onClick={() => {
            onDeleteTask(id);
          }}
        >
          <RiDeleteBin6Line />
        </button>
      </div>
    </div>
  );
};

export default ToDo;
