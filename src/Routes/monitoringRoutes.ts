import express from "express";
import { MonitoringController } from "../Controller/MonitoringController";

const router = express.Router();

router.post("/", MonitoringController.create);
router.get("/", MonitoringController.getAll);
router.put("/:id", MonitoringController.update);
router.delete("/:id", MonitoringController.delete);

export default router;
