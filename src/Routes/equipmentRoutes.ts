import express from "express";
import { EquipmentController } from "../Controller/EquipmentController";

const router = express.Router();

// 🌱 CRUD Routes
router.post("/", EquipmentController.create);
router.get("/", EquipmentController.getAll);
//router.get("/:id", EquipmentController.getById);
router.put("/:id", EquipmentController.update);
router.delete("/:id", EquipmentController.delete);

export default router;
