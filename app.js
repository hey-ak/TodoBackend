const express = require("express");
const app = express();
const authrouter = require("./routes/auth.routes")
const todorouter = require("./routes/list.routes")

app.use(express.json())
app.use(authrouter);
app.use(todorouter)




module.exports = app