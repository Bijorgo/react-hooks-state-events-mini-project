import React from "react";
import { useState } from "react";


function NewTaskForm({categories}) {
  const [ newTask, setNewTask ] = useState("")
  const noAllCat = categories.filter( category => category !== "All")
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {noAllCat.map( category => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
