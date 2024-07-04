const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User.js");

const app = express();
app.use(express.json()); // parses incoming requests with JSON payloads.......transport backend to frontend json format
app.use(cors()); // allows cross-origin resource sharing

mongoose.connect(
  "mongodb://127.0.0.1:27017/user"
);

app.listen(3001, () => {
  console.log("Server started on port 3001");
});

app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});
