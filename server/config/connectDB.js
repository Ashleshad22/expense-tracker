const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL); // connect to the database
    console.log("Connected to MongoDB"); // log a success message
  } catch (error) {
    console.log(`${error}`);
  }
};

module.exports = connectDb;
