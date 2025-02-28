import {Request, Response} from "express";
import {FieldService} from "../service/FieldService";

export class FieldController {

    static async create(req: Request, res: Response) {
        try {
            const field = await FieldService.createField(req.body);
            res.status(201).json(field);
        } catch (error) {
            res.status(500).json({error: "Error creating field"});
        }
    }

    static async getAll(req: Request, res: Response) {
        try {
            const fields = await FieldService.getAllFields();
            res.json(fields);
        } catch (error) {
            res.status(500).json({error: "Error fetching fields"});
        }
    }

    static async getById(req: Request, res: Response) {
        try {
            const field = await FieldService.getFieldById((req.params.fieldId));
            if (!field) return res.status(404).json({error: "Field not found"});
            res.json(field);
        } catch (error) {
            res.status(500).json({error: "Error fetching field"});
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const field = await FieldService.updateField((req.params.fieldId), req.body);
            res.json(field);
        } catch (error) {
            res.status(500).json({error: "Error updating field"});
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            await FieldService.deleteField((req.params.fieldId));
            res.json({message: "Field deleted successfully"});
        } catch (error) {
            res.status(500).json({error: "Error deleting field"});
        }
    }
}
