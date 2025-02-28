import express from "express";
import { EquipmentController } from "../Controller/EquipmentController";

const router = express.Router();

router.post("/", EquipmentController.create);
router.get("/", EquipmentController.getAll);
router.put("/:eqiipmentId", EquipmentController.update);
router.delete("/:eqiipmentId", EquipmentController.delete);

export default router;
