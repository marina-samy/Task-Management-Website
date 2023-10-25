const express = require('express');
const { addTodo, getAllTodos, toggleTodo, updateTodo, deleteTodo, getTodoByCategory, addCatTodo } = require('../controller/todoController');

const router = express.Router();

router.post('/todos', addTodo);
router.post('/todos/:category', addCatTodo )
router.put('/todos/:id', updateTodo);
router.get('/todos', getAllTodos);
router.put('/todos/:id/toggle', toggleTodo);
router.delete('/todos/:id', deleteTodo);
router.get('/todos/:category', getTodoByCategory);

module.exports = router;