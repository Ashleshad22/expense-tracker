const mongoose = require("mongoose");

const FinanceSchema = new mongoose.Schema(
  {
    userID: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "Name is required"],
    },
    amount: {
      type: Number,
      required: [true, "Amount is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    paymentMethod: {
      type: String,
      required: [true, "Payment method is required"],
    },
  },

  { timestamps: true }
);

const FinanceRecordModel = mongoose.model("finance-form", FinanceSchema); // creates a model from the schema
module.exports = FinanceRecordModel;
