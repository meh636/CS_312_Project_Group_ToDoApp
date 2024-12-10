import React, { useState, useEffect } from 'react';
import './App.css';
import './styles.css';

function App() {
  const [tasks, setTasks] = useState([]); // State to hold the tasks
  const [newTask, setNewTask] = useState(''); // State for the new task input

  // Fetch tasks from the backend on component mount
  useEffect(() => {
    async function fetchTasks() {
      try {
        const response = await fetch('http://localhost:5001/todos');
        const data = await response.json();
        console.log('Fetched Tasks:', data); // Debugging: Check the fetched tasks
        setTasks(data); // Update the tasks state with the fetched tasks
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    }

    fetchTasks();
  }, []); // Empty dependency array to run this effect only once on component mount

  // Add a new task
  const addTask = async () => {
    try {
      const response = await fetch('http://localhost:5001/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newTask }),
      });

      const newTaskData = await response.json();
      console.log('Added New Task:', newTaskData); // Debugging: Check the newly added task
      setTasks([...tasks, newTaskData]); // Update tasks state with the newly added task
      setNewTask(''); // Clear the input field
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
    <div className="todo-list">
      <h1>My To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.id}>{task.text}</li> // Render each task text
          ))
        ) : (
          <li>No tasks available. Add some tasks!</li> // Display a message if no tasks
        )}
      </ul>
    </div>
  );
}

export default App;
