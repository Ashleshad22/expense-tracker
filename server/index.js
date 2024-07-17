const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDB.js");
const userRoutes = require("./routes/userRoute.js");
const financeRoutes = require("./routes/financeRoutes");

dotenv.config();

const app = express();
app.use(express.json()); // parses incoming requests with JSON payloads.......transport backend to frontend json format
app.use(cors()); // allows cross-origin resource sharing

connectDb();

app.use("/", userRoutes); // use user routes

app.use("/api/finance", financeRoutes);

const PORT = 3001 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
