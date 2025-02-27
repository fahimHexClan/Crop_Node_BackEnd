import express from "express";
import { FieldController } from "../Controller/FieldController";

const router = express.Router();

// 🌱 CRUD Routes
router.post("/", FieldController.create);
router.get("/", FieldController.getAll);
//router.get("/:id", FieldController.getById);
router.put("/:id", FieldController.update);
router.delete("/:id", FieldController.delete);

export default router;
