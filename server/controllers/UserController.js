const UserModel = require("../models/UserModel.js"); // import the user model
const Jwt = require("jsonwebtoken");

// login callback
const loginController = async (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        Jwt.sign(
          { userId: user._id },
          "exp-track",
          { expiresIn: "2h" },
          (err, token) => {
            if (err) {
              res.json("Something went wrong");
            }
            res.json({ message: "Success", id: user._id, auth: token });
          }
        );
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record found");
    }
  });
};

//Register Callback
const registerController = async (req, res) => {
  const { email } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      res.json("User already registered");
    } else {
      UserModel.create(req.body)
        .then((newUser) => {
          Jwt.sign(
            { userId: newUser._id },
            "exp-track",
            { expiresIn: "2h" },
            (err, token) => {
              if (err) {
                res.json("Something went wrong");
              }
              res.json({
                message: "User registered successfully",
                id: newUser._id,
                auth: token,
              });
            }
          );
        })
        .catch((err) => res.json(err));
    }
  });
};

const dataController = async (req, res) => {
  const email = req.query.email;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ id: user._id, name: user.name, email: user.email });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  loginController,
  registerController,
  dataController,
};
