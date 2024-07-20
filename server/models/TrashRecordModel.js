//Deleted records are stored

const mongoose = require("mongoose");

const TrashSchema = new mongoose.Schema(
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
    deletedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const TrashRecordModel = mongoose.model("trash-form", TrashSchema);
module.exports = TrashRecordModel;
