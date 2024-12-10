const express = require('express');
const pool = require('./db');  // Import the pool from db.js
const cors = require('cors');  // Import CORS for handling cross-origin requests
const app = express();
const port = 5001;

// Middleware
app.use(cors());  // Enable CORS
app.use(express.json());

// Routes
app.get('/todos', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM todos');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching todos');
    }
});

app.post('/todos', async (req, res) => {
    const { text } = req.body;
    try {
        await pool.query('INSERT INTO todos (text) VALUES ($1)', [text]);
        res.status(201).json({ text });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error adding todo');
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Edit a Todo (PUT request)
app.put('/todos/:id', async (req, res) => {
    const { id } = req.params;
    const { text, completed } = req.body;

    try {
        const result = await pool.query(
            'UPDATE todos SET text = $1, completed = $2 WHERE id = $3 RETURNING *',
            [text, completed, id]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating todo');
    }
});

// Delete a Todo (DELETE request)
app.delete('/todos/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const result = await pool.query('DELETE FROM todos WHERE id = $1 RETURNING *', [id]);

        if (result.rowCount === 0) {
            return res.status(404).send('Todo not found');
        }

        res.status(200).send('Todo deleted');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting todo');
    }
});

