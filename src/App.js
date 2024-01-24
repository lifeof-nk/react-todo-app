import React from "react";
import { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (task) => {
    const toDo = {
      id: Math.floor(Math.random() * 100),
      task: task,
    };

    setTasks([toDo, ...tasks]);
    console.log("New task added", task);
  };

  return (
    <div className="flex justify-center mt-10">
      <div>
        <ToDoForm handleAddNewTask={addNewTask} />

        {tasks.map((task) => (
          <ToDo key={task.id} task={task.task} />
        ))}
      </div>
    </div>
  );
};

export default App;
