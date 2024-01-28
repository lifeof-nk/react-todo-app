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
      completed: false,
    };

    setTasks([toDo, ...tasks]);
    console.log("New task added, ", task);
  };

  const handleDeleteTask = (id) => {
    console.log("deleting task with id", id);
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // const handleIsComplete = (id) => {
  //   setTasks(
  //     tasks.map((task) => {
  //       if (task.id === id) {
  //         return { ...task, completed: !task.completed };
  //       } else {
  //         return task;
  //       }
  //     })
  //   );
  // };

  const toggleComplete = (id) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex !== -1) {
      const prevTasks = [...tasks];
      prevTasks[taskIndex] = {
        ...prevTasks[taskIndex],
        completed: !prevTasks[taskIndex].completed,
      };
      setTasks(prevTasks);
    }
  };

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
                completed={task.completed}
                onDeleteTask={handleDeleteTask}
                onComplete={toggleComplete}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
