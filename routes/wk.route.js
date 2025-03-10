import express from "express";
import {
  wtAddNew,
  wtDelete,
  wtGetAll,
  wtUpdate,
} from "../controller/wk.controller.js";

const router = express.Router();

router.post("/wt/add-wt", wtAddNew);

router.get("/wt", wtGetAll);
router.delete("/wt/:id", wtDelete);
router.put("/wt/:id", wtUpdate);

export default router;
