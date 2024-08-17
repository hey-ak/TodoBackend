const User = require("../models/user");
const List = require("../models/list");

const addTodo = async (req, res) => {
  try {
    const { title, desc, user } = req.body;
    const newTodo = new List({ title, desc, user });
    await newTodo.save();

    return res.json({
      todo: newTodo,
      msg: "Todo added SuccessFully",
      error: false,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      msg: "Something Went Wrong",
      error: true,
    });
  }
};

const deleteTodo = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedTodo = await List.findByIdAndDelete(id);
  
      if (!deletedTodo) {
        return res.json({
          msg: "Todo not found",
          error: true,
        });
      }
  
      return res.json({
        msg: "Todo deleted successfully",
        error: false,
      });
    } catch (error) {
      console.log(error);
      return res.json({
        msg: "Something went wrong",
        error: true,
      });
    }
  };

  const updateTodo = async (req, res) => {
    try {
      const { id } = req.params;
      console.log();
      
      const { title, desc, user } = req.body;
      const updatedTodo = await List.findByIdAndUpdate(
        id,
        { title, desc, user },
        { new: true }
      );
  
      if (!updatedTodo) {
        return res.json({
          msg: "Todo not found",
          error: true,
        });
      }
  
      return res.json({
        todo: updatedTodo,
        msg: "Todo updated successfully",
        error: false,
      });
    } catch (error) {
      console.log(error);
      return res.json({
        msg: "Something went wrong",
        error: true,
      });
    }
  };
  
  
  const getAllTodos = async (req, res) => {
    try {
      const todos = await List.find();
  
      return res.json({
        todos,
        msg: "Todos fetched successfully",
        error: false,
      });
    } catch (error) {
      console.log(error);
      return res.json({
        msg: "Something went wrong",
        error: true,
      });
    }
  };
  
module.exports = { addTodo,deleteTodo,updateTodo,getAllTodos };
