const express = require("express");
const router = express.Router();
const {addTodo,deleteTodo,updateTodo,getAllTodos} = require("../controllers/list.controller")


router.post("/todo",addTodo);
router.delete("/todo/:id",deleteTodo);
router.put("/todo/:id",updateTodo);
router.get("/todo",getAllTodos);



module.exports = router