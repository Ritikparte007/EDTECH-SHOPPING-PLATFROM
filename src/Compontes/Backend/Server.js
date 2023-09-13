// server.js

const mongoose = require("mongoose");

const main = async () => {
  try {
    const connect = await mongoose.connect(
      "mongodb+srv://ritikparte458:H8AAKupA0BLirh9M@learnplaformcode.1jfdcda.mongodb.net/E-learning",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
};

module.exports = { main };
