import React from "react";
import { useState } from "react";



function NewTaskForm({categories, onTaskFormSubmit }) {
   const [ newTask, setNewTask ] = useState("")
  const [ newCat, setNewCat ] = useState("")
  const noAllCat = categories.filter( category => category !== "All")

  return (
    <form 
    className="new-task-form"
    onSubmit={(event) => {
      event.preventDefault()
      if (!newTask || !newCat) {
        alert("Please fill in both task and category.");
        return;
      }
      const formData = {
        id: Date.now(),
        text: newTask,
        category: newCat
      }
      onTaskFormSubmit(formData)
      setNewTask("")
      setNewCat("")
    }}
    >
      <label>
        Details
        <input 
          type="text" 
          name="text" 
          value={newTask}
          onChange={event => setNewTask(event.target.value)}
        />
      </label>
      <label>
        Category
        <select 
          name="category"
          value={newCat}
          onChange={event => setNewCat(event.target.value)}
        >
          {noAllCat.map( category => (
            <option key={category} >{category}</option>
          ))}
        </select>
      </label>
      <input 
        type="submit" 
        value="Add task" 
      />
    </form>
  );
}

export default NewTaskForm;
