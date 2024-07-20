const FinanceRecordModel = require("../models/FinanceRecordModel");
const TrashRecordModel = require("../models/TrashRecordModel");

//move record from main collection to trash
const deleteExpenseController = async (req, res) => {
  
  try {
    //find record using the id of the record
    //findById - mongoose functionality

    const record = await FinanceRecordModel.findById(req.params.id);
    if (!record) {
      return res.status(404).send("Record not found");
    }

    const trashRecord = new TrashRecordModel(record.toObject());
    await trashRecord.save();
    await FinanceRecordModel.findByIdAndDelete(req.params.id);

    res.status(200).send("Record moved to trash and deleted from main DB");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { deleteExpenseController };
