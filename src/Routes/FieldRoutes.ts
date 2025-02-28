import express from "express";
import { FieldController } from "../Controller/FieldController";

const router = express.Router();

router.post("/", FieldController.create);
router.get("/", FieldController.getAll);
router.put("/:fieldId", FieldController.update);
router.delete("/:fieldId", FieldController.delete);

export default router;
