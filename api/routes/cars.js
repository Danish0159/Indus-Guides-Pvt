import express from "express";
import {
  createCar,
  deleteCar,
  updateCar,
  getCar,
  getCars,
  patchCar,
} from "../controllers/car.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();
//CREATE
// router.post("/", verifyAdmin, createCar);
router.post("/", createCar);
//UPDATE
router.put("/:id", verifyAdmin, updateCar);
//DELETE
// router.delete("/:id", verifyAdmin, deleteCar);
router.delete("/:id", deleteCar);

//GET

router.get("/:id", getCar);
//GET ALL

router.get("/", getCars);
router.patch("/:id", patchCar);

export default router;
