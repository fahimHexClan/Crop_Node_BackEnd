import express from "express";
import { getUsers, addUser } from "../Controller/userController";  // Ensure correct path

const router = express.Router();

router.get("/", getUsers);
router.post("/", addUser);

export default router;
