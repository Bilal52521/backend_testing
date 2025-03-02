import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
import skRouter from "./routes/sk.route.js";
import wtRouter from "./routes/wk.route.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);
app.use("/api", skRouter);
app.use("/api", wtRouter);

// Test Route
app.get("/test", (req, res) => {
  res.send("Testing API working...");
});

app.get("/", (req, res) => {
  res.send("Default Testing API working...");
});

// Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

export default app;
