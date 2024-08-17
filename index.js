const dbConnect = require("./db.js");
const app = require("../Backend/app.js")
require('./db.js')

app.listen(8000,()=>{
    console.log("server started");
});

dbConnect()
