import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
import skRouter from "./routes/sk.route.js";
import wtRouter from "./routes/wk.route.js";

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const allowedOrigins = ["http://localhost:3000"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// Routes
app.use("/api/auth", authRouter);
app.use("/api", skRouter);
app.use("/api", wtRouter);

// Test Route
app.get("/api/test", (req, res) => {
  res.send("Testing API working...");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
