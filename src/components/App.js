import React from "react";
import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  // set states for use in components
  const [ selectedCategory, setSelectedCategory ] = useState("All")
  const [ tasksInList, setTasksInList] = useState(TASKS)

  function onTaskFormSubmit(formData) {
    setTasksInList([...tasksInList, formData])
  }

  // filter task list based on filter selection
  const filteredTasks = tasksInList.filter(task => {
    if (selectedCategory === "All") return true;
    return task.category === selectedCategory
  })


  // callback function to remove a task 
  const removeTask = (taskId) => {
    setTasksInList(tasksInList.filter(task => task.id !== taskId))
  };


  // app component return below
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories= {CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        />
      <NewTaskForm 
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList 
        tasks= {filteredTasks}
        removeTask={removeTask}
        key={TASKS.id}
        />
    </div>
  );
}

export default App;
