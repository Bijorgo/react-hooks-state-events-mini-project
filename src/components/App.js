import React from "react";
import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";


function App() {
  const [ selectedCategory, setSelectedCategory ] = useState("All")
  const [ tasksInList, setTasksInList] = useState(TASKS)

 
  const filteredTasks = tasksInList.filter(task => {
    if (selectedCategory === "All")
      return true;
    return task.category === selectedCategory
  })

  const removeTask = (taskId) => {
    setTasksInList(tasksInList.filter(task => task.id !== taskId))
  };
 /*
  const addTask = (newTask) => {
    setTasksInList([...tasksInList, newTask])
  }
*/
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
