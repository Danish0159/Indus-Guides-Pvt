import express from "express";
import {
  createReserve,
  getReserve,
  getReserves,
} from "../controllers/Reserve.js";

const router = express.Router();

router.post("/", createReserve);

router.get("/", getReserves);
router.get("/:id", getReserve);

export default router;
