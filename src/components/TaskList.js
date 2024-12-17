import React from "react";
import Task from "./Task";
import { useState } from "react";

function TaskList({tasks, key, removeTask}) {

  return (
    <div className="tasks">
      {tasks.map( task => (
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
