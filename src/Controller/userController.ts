import { Request, Response } from "express";
import { getAllUser, createUser } from "../service/UserService";

export const getUser= async (req: Request, res: Response) => {
    try {
        const users = await getAllUser();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch books" });
    }
};

export const addUser = async (req: Request, res: Response) => {
    const {  name, email } = req.body;

    try {
        const user = await createUser({ name,email});
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: "Failed to create book" });
    }
};