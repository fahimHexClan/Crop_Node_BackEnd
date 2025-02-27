import express from "express";
import { getUser, addUser } from "../Controller/userController";  // Ensure correct path

const router = express.Router();

router.get("/", getUser);
router.post("/", addUser);

export default router;
