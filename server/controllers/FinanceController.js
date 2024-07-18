const FinanceRecordModel = require("../models/FinanceRecordModel");

const addExpenseController = async (req, res) => {
  const { userID, date, description, amount, category, paymentMethod } =
    req.body;

  const newRecord = new FinanceRecordModel({
    userID,
    date,
    description,
    amount,
    category,
    paymentMethod,
  });

  try {
    await newRecord.save();
    res.status(201).json({ message: "Finance record added successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getExpensesController = async (req, res) => {
  const { userID } = req.params;

  try {
    const records = await FinanceRecordModel.find({ userID }).sort({ date: -1 });
    res.status(200).json(records);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addExpenseController, getExpensesController };
