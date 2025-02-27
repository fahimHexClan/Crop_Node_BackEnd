import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUsers = async () => {
    return await prisma.user.findMany();
};

export const createUser = async (name: string, email: string) => {
    return await prisma.user.create({
        data: { name, email },
    });
};

// Get all users
export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Failed to fetch users" });
    }
};

// Add a new user
export const addUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            res.status(400).json({ error: "Name and email are required" });
            return;
        }

        const user = await prisma.user.create({
            data: { name, email },
        });

        res.status(201).json(user);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Failed to create user" });
    }
};
