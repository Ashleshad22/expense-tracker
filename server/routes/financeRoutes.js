const express = require("express");
const router = express.Router();
const {
  addExpenseController,
  getExpensesController,
} = require("../controllers/FinanceController");

router.post("/addFinanceRecord", addExpenseController);
router.get("/getFinanceRecords/:userID", getExpensesController);

module.exports = router;
