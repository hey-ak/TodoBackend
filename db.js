const mongoose = require("mongoose");

const dbConnect = async (req, res) => {
  try {
    await mongoose.connect(
      "jab use hoga tab url dalna hoga"
    );
    console.log("Database Connected");
    
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
