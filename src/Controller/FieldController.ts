import { Request, Response } from "express";
import { FieldService } from "../service/FieldService";

export class FieldController {
    // ✅ Create Field
    static async create(req: Request, res: Response) {
        try {
            const field = await FieldService.createField(req.body);
            res.status(201).json(field);
        } catch (error) {
            res.status(500).json({ error: "Error creating field" });
        }
    }

    // ✅ Get All Fields
    static async getAll(req: Request, res: Response) {
        try {
            const fields = await FieldService.getAllFields();
            res.json(fields);
        } catch (error) {
            res.status(500).json({ error: "Error fetching fields" });
        }
    }

    // ✅ Get Field by ID
    static async getById(req: Request, res: Response) {
        try {
            const field = await FieldService.getFieldById(Number(req.params.id));
            if (!field) return res.status(404).json({ error: "Field not found" });
            res.json(field);
        } catch (error) {
            res.status(500).json({ error: "Error fetching field" });
        }
    }

    // ✅ Update Field
    static async update(req: Request, res: Response) {
        try {
            const field = await FieldService.updateField(Number(req.params.id), req.body);
            res.json(field);
        } catch (error) {
            res.status(500).json({ error: "Error updating field" });
        }
    }

    // ✅ Delete Field
    static async delete(req: Request, res: Response) {
        try {
            await FieldService.deleteField(Number(req.params.id));
            res.json({ message: "Field deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: "Error deleting field" });
        }
    }
}
