const todo = require("../model/todo");

const addTodo = async (req, res) => {
    try {
        const newTodo = await todo.create({
            data: req.body.data,
        })
        await newTodo.save();

        return res.status(200).json(newTodo);
    } catch(error){
        return res.status(500).json(error.message);
    }
    
  };


  const addCatTodo = async (req, res) => {
    const { category } = req.params;
    const { data } = req.body;
  
    try {
      const newTodo = new todo({
        data,
        category
      });
  
      await newTodo.save();
      res.status(201).json(newTodo);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const getAllTodos = async (req, res) => {
    try {
        const todos = await todo.find({}).sort({'createdAt': -1})

        return res.status(200).json(todos);
    } catch(error){
        return res.status(500).json(error.message);
    }
    
  };


  const toggleTodo = async (req, res) => {
    try {
      const todoId = req.params.id;
      const upTodo = await todo.findByIdAndUpdate(
        todoId,
        { done: !todo.done }, // The new data to apply to the document
        { new: true } // Return the updated document instead of the original
      );
  
      return res.status(200).json(upTodo);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };





  const updateTodo = async (req, res) => {
    try {
      const { id } = req.params;
      const updatedTodo = await todo.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json(updatedTodo);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };



   



  const deleteTodo = async (req, res) => {
    try {
      const theTodo = await todo.findByIdAndDelete(req.params.id);
      return res.status(200).json(theTodo );
    } catch (error) {
      return res.status(500).json(error.message);
    }
  };


  const getTodoByCategory = async (req, res) => {
    const category = req.params.category;
  
    try {
      const todos = await todo.find({ category });
      res.json(todos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

  
  module.exports = {
    addTodo, getAllTodos, toggleTodo, updateTodo, deleteTodo, getTodoByCategory, addCatTodo
  };