import express from "express";
import { searchController } from "../controller/search.controller.js";

const router = express.Router();

router.get("/search", searchController);

export default router;
