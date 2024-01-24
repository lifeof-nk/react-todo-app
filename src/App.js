import React from "react";
import { useState } from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addNewTask = (task) => {
    const toDo = {
      id: Math.floor(Math.random() * 10000),
      task: task,
    };

    setTasks([toDo, ...tasks]);
    console.log("New task added", task);
  };

  const handleDeleteTask = (id) => {
    console.log("deleting task with id", id);
    setTasks(tasks.filter((task) => task.id !== id));
  };
  console.log(tasks);
  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-center items-center mt-10 w-2/4 ">
          <div>
            <ToDoForm handleAddNewTask={addNewTask} />

            {tasks.map((task) => (
              <ToDo
                key={task.id}
                id={task.id}
                task={task.task}
                onDeleteTask={handleDeleteTask}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
