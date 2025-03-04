import app from "./index.js";
import { createServer } from "@vercel/node";

// Convert Express app into a serverless function
export default createServer(app);
