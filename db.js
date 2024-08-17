const mongoose = require("mongoose");

const dbConnect = async (req, res) => {
  try {
    await mongoose.connect(
      "mongodb+srv://jhaaj907:akbros0718@cluster0.ytnyipu.mongodb.net/todo"
    );
    console.log("Database Connected");
    
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
