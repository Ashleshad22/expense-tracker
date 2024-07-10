const express = require("express");

const {
  loginController,
  registerController,
  dataController,
  financeController,
  addRecordController,
} = require("../controllers/UserController");

//router object
const router = express.Router();

//routers
// POST || LOGIN USER
router.post("/login", loginController);

//POST || REGISTER USER
router.post("/register", registerController);

// GET || GET ALL USERS
router.get("/getUserDetails", dataController);

router.get("/getAllFinanceDetails", financeController);

router.post("/addFinanceRecord", addRecordController);

module.exports = router;
