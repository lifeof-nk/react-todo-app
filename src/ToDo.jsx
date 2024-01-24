import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const ToDo = ({ task, onDeleteTask, id }) => {
  return (
    <div className="flex p-1 border-2 mt-2 justify-between ">
      <div>{task}</div>
      <button
        className="ml-6"
        onClick={() => {
          onDeleteTask(id);
        }}
      >
        <RiDeleteBin6Line />
      </button>
    </div>
  );
};

export default ToDo;
