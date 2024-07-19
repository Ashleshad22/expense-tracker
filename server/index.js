const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDB.js");
const userRoutes = require("./routes/userRoute.js");
const financeRoutes = require("./routes/financeRoutes");
const trashRoutes = require("./routes/trashRoutes");

dotenv.config();

const app = express();
app.use(express.json()); // Parses incoming requests with JSON payloads
app.use(cors()); // Allows cross-origin resource sharing

connectDb();

app.use("/", userRoutes); // Use user routes
app.use("/api/finance", financeRoutes); // Use finance routes
app.use("/api/trash", trashRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
