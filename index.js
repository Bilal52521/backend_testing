import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
import skRouter from "./routes/sk.route.js";
import wtRouter from "./routes/wk.route.js";
import searchRouter from "./routes/search.route.js";
import "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());

// Middleware
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

// Routes
app.use("/api/auth", authRouter);
app.use("/api", skRouter);
app.use("/api", wtRouter);
app.use("/api", searchRouter);

// Test Routes
app.get("/test", (req, res) => {
  res.send("Testing API working...");
});

app.get("/", (req, res) => {
  res.send("Default Testing API working...");
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
