const UserModel = require("../models/UserModel.js"); // import the user model
const FinanceRecordModel = require("../models/FinanceRecordModel.js"); // import the finance record model

// login callback
const loginController = async (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json({ message: "Success", id: user._id });
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
        .then((users) => res.json(users))
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

const financeController = async (req, res) => {
  const id = req.query.id;
  try {
    const finances = await FinanceRecordModel.find({ id });
    if (!finances) {
      return res.status(404).json({ error: "No records found" });
    }
    res.json(finances);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const addRecordController = async (req, res) => {
  const { id, amount, description, category, paymentMethod } = req.body;
  if (!id || !amount || !description || !paymentMethod || !category) {
    return res.status(400).json({ error: "Missing required fields" });
  }
  try {
    const newRecord = await FinanceRecordModel.create({
      id,
      amount,
      description,
    });
    res.json(newRecord);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  loginController,
  registerController,
  dataController,
  financeController,
  addRecordController
};
