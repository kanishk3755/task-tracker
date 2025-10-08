import React, { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import CompleteAllButton from "./components/CompleteAllButton"; // new component
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (taskText.trim() === "") return;
    const newTask = { id: Date.now(), text: taskText, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // New function to mark all tasks as completed
  const markAllComplete = () => {
    setTasks(tasks.map((task) => ({ ...task, completed: true })));
  };

  return (
    <div className="App">
      <h1>Task Tracker</h1>
      <AddTaskForm addTask={addTask} />
      <CompleteAllButton markAllComplete={markAllComplete} /> {/* new button */}
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
