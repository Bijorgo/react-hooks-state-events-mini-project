import React from "react";
import Task from "./Task";
import { useState } from "react";

function TaskList({tasks}) {
  const [ taskList, setTaskList] = useState(tasks)

  const removeTask = (taskId) => {
    setTaskList(taskList.filter(task => task.id !== taskId))
  };

  return (
    <div className="tasks">
      {taskList.map( task => (
        <li key= {task.id}>
          <Task 
          id={task.id}
          text={task.text} 
          category={task.category}
          onDelete={removeTask}
          />
        </li>
      ))}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
