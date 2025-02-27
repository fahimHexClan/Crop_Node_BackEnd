import express from "express";
import { VehicleController } from "../Controller/VehicleController";

const router = express.Router();

// 🛠 CRUD Routes
router.post("/", VehicleController.create);
router.get("/", VehicleController.getAll);
//router.get("/:id", VehicleController.getById);
router.put("/:id", VehicleController.update);
router.delete("/:id", VehicleController.delete);

export default router;
