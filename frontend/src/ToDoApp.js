import React, { useState, useEffect } from 'react';

function TodoApp() {
  // State to store the list of todos
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');

  // Load todos when the component mounts
  useEffect(() => {
    loadTodos();
  }, []);

  // Fetch todos from the backend
  const loadTodos = async () => {
    try {
      const response = await fetch('http://localhost:5001/todos');
      if (response.ok) {
        const todos = await response.json();
        setTodos(todos);
      } else {
        console.error('Error fetching todos:', response.statusText);
      }
    } catch (error) {
      console.error('Error loading todos:', error);
    }
  };

  // Add a new todo
  const handleAddTodo = async (event) => {
    event.preventDefault();

    const todoText = newTodoText;
    if (!todoText) return; // Don't add empty todos

    try {
      const response = await fetch('http://localhost:5001/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: todoText }),
      });

      if (response.ok) {
        const newTodo = await response.json();
        setTodos((prevTodos) => [...prevTodos, newTodo]); // Update state with new todo
        setNewTodoText(''); // Clear the input field
      } else {
        console.error('Error adding todo:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Edit a todo
  const handleEditTodo = async (id, oldText) => {
    const newText = prompt('Edit your todo:', oldText);
    if (!newText) return; // Don't update if there's no new text

    try {
      const response = await fetch(`http://localhost:5001/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newText, completed: false }),
      });

      if (response.ok) {
        const updatedTodo = await response.json();
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === id ? { ...todo, text: updatedTodo.text } : todo
          )
        );
      } else {
        console.error('Error editing todo:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Delete a todo
  const handleDeleteTodo = async (id) => {
    if (window.confirm('Are you sure you want to delete this todo?')) {
      try {
        const response = await fetch(`http://localhost:5001/todos/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        } else {
          console.error('Error deleting todo:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div>
      <h1>Todo App</h1>

      {/* Form to add a new todo */}
      <form id="todo-form" onSubmit={handleAddTodo}>
        <input
          id="todo-input"
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>

      {/* Displaying the list of todos */}
      <ul id="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} data-id={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => handleEditTodo(todo.id, todo.text)}>Edit</button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
