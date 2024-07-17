const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./config/connectDB.js");
const userRoutes = require("./routes/userRoute.js");
const financeRoutes = require("./routes/financeRoutes");

dotenv.config();

const app = express();
app.use(express.json()); // Parses incoming requests with JSON payloads
app.use(cors()); // Allows cross-origin resource sharing

connectDb();

app.use("/", userRoutes); // Use user routes
app.use("/api/finance", financeRoutes); // Use finance routes

// Error handling middleware for malformed URI and other errors
app.use((err, req, res, next) => {
  if (err instanceof URIError) {
    res.status(400).send('Bad Request: Malformed URI');
  } else {
    next(err);
  }
});

// Catch-all route to handle undefined routes (Not needed in development mode)
app.use((req, res, next) => {
  res.status(404).send("API route not found");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
