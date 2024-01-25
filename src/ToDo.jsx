import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const ToDo = ({ task, onDeleteTask, id, completed, onComplete }) => {
  return (
    <div className="flex p-1 border-2 mt-2 justify-between ">
      <div>{task}</div>
      <div>
        <button
          onClick={() => {
            onComplete(id, completed);
          }}
        >
          Done
        </button>
        <button
          className="ml-6"
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
