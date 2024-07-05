const express = require("express");
const cors = require("cors");
const UserModel = require("./models/UserModel.js");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDB.js");

dotenv.config();

const app = express();
app.use(express.json()); // parses incoming requests with JSON payloads.......transport backend to frontend json format
app.use(cors()); // allows cross-origin resource sharing

connectDb();

const PORT = 3001 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record found");
    }
  });
});

app.post("/register", (req, res) => {
  const { email } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      res.json("User already registered");
    } else {
      UserModel.create(req.body)
        .then((users) => res.json(users))
        .catch((err) => res.json(err));
    }
  });
});
