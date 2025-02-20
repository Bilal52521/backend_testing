import express from "express";
import { sign_up, signin } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/sign_up", sign_up);
router.post("/signin", signin);

export default router;
