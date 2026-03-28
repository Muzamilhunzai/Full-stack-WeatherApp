import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import weatherRoute from "./routes/weatherroute.js";

const app = express();

app.use(cors());
app.use(express.json());

connectDB();
app.use("/api", weatherRoute);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});