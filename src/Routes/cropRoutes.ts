import express from "express";
import { CropController } from "../Controller/CropController";

const router = express.Router();

// 🌱 CRUD Routes
router.post("/", CropController.create);
router.get("/", CropController.getAll);
// router.get("/crops/:id", CropController.getById);
router.put("/:id", CropController.update);
router.delete("/:id", CropController.delete);

export default router;
