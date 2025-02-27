import { Request, Response } from "express";
import { EquipmentService } from "../service/EquipmentService";

export class EquipmentController {
    // ✅ Create Equipment
    static async create(req: Request, res: Response) {
        try {
            const equipment = await EquipmentService.createEquipment(req.body);
            res.status(201).json(equipment);
        } catch (error) {
            res.status(500).json({ error: "Error creating equipment" });
        }
    }

    // ✅ Get All Equipment
    static async getAll(req: Request, res: Response) {
        try {
            const equipment = await EquipmentService.getAllEquipment();
            res.json(equipment);
        } catch (error) {
            res.status(500).json({ error: "Error fetching equipment" });
        }
    }

    // ✅ Get Equipment by ID
    static async getById(req: Request, res: Response) {
        try {
            const equipment = await EquipmentService.getEquipmentById(Number(req.params.id));
            if (!equipment) return res.status(404).json({ error: "Equipment not found" });
            res.json(equipment);
        } catch (error) {
            res.status(500).json({ error: "Error fetching equipment" });
        }
    }

    // ✅ Update Equipment
    static async update(req: Request, res: Response) {
        try {
            const equipment = await EquipmentService.updateEquipment(Number(req.params.id), req.body);
            res.json(equipment);
        } catch (error) {
            res.status(500).json({ error: "Error updating equipment" });
        }
    }

    // ✅ Delete Equipment
    static async delete(req: Request, res: Response) {
        try {
            await EquipmentService.deleteEquipment(Number(req.params.id));
            res.json({ message: "Equipment deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: "Error deleting equipment" });
        }
    }
}
