// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001;

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse incoming JSON requests

// Dummy in-memory data for todos (this would usually be a database)
let todos = [
  { id: 1, text: 'Learn React' },
  { id: 2, text: 'Build a TODO app' }
];

// Get all todos
app.get('/todos', (req, res) => {
    // Fetch your tasks from database or in-memory array
    const tasks = [
      { id: 1, text: 'Learn React' },
      { id: 2, text: 'Build a TODO app' },
    ];
  
    // Send the tasks as a JSON response
    res.json(tasks);
  });  

// Add a new todo
app.post('/todos', (req, res) => {
  const newTodo = { id: todos.length + 1, text: req.body.text };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Edit a todo
app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const updatedText = req.body.text;

  let todo = todos.find(todo => todo.id === parseInt(id));
  if (todo) {
    todo.text = updatedText;
    res.json(todo);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
});

// Delete a todo
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter(todo => todo.id !== parseInt(id));
  res.status(204).send(); // No content to return
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
