import express from "express";
import { VehicleController } from "../Controller/VehicleController";

const router = express.Router();

router.post("/", VehicleController.create);
router.get("/", VehicleController.getAll);
router.put("/:id", VehicleController.update);
router.delete("/:id", VehicleController.delete);

export default router;
