import {Request, Response} from "express";
import {EquipmentService} from "../service/EquipmentService";

export class EquipmentController {
    static async create(req: Request, res: Response) {
        try {
            const equipment = await EquipmentService.createEquipment(req.body);
            res.status(201).json(equipment);
        } catch (error) {
            res.status(500).json({error: "Error creating equipment"});
        }
    }

    static async getAll(req: Request, res: Response) {
        try {
            const equipment = await EquipmentService.getAllEquipment();
            res.json(equipment);
        } catch (error) {
            res.status(500).json({error: "Error fetching equipment"});
        }
    }

    static async getById(req: Request, res: Response) {
        try {
            const equipment = await EquipmentService.getEquipmentById((req.params.eqiipmentId));
            if (!equipment) return res.status(404).json({error: "Equipment not found"});
            res.json(equipment);
        } catch (error) {
            res.status(500).json({error: "Error fetching equipment"});
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const equipment = await EquipmentService.updateEquipment((req.params.eqiipmentId), req.body);
            res.json(equipment);
        } catch (error) {
            res.status(500).json({error: "Error updating equipment"});
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            await EquipmentService.deleteEquipment((req.params.eqiipmentId));
            res.json({message: "Equipment deleted successfully"});
        } catch (error) {
            res.status(500).json({error: "Error deleting equipment"});
        }
    }
}
