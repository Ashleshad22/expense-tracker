const express = require("express");

const router = express.Router();

const {deleteExpenseController} = require("../controllers/TrashController");

router.delete("/deleteFinanceRecord/:id", deleteExpenseController);

module.exports = router;
