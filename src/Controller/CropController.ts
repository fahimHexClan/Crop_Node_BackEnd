import { Request, Response } from "express";
import { CropService } from "../service/CropService";

export class CropController {
    // ✅ Create Crop
    static async create(req: Request, res: Response) {
        try {
            const crop = await CropService.createCrop(req.body);
            res.status(201).json(crop);
        } catch (error) {
            res.status(500).json({ error: "Error creating crop" });
        }
    }

    // ✅ Get All Crops
    static async getAll(req: Request, res: Response) {
        try {
            const crops = await CropService.getAllCrops();
            res.json(crops);
        } catch (error) {
            res.status(500).json({ error: "Error fetching crops" });
        }
    }

    // ✅ Get Crop by ID
    static async getById(req: Request, res: Response) {
        try {
            const crop = await CropService.getCropById(req.params.id);
            if (!crop) return res.status(404).json({ error: "Crop not found" });
            res.json(crop);
        } catch (error) {
            res.status(500).json({ error: "Error fetching crop" });
        }
    }

    // ✅ Update Crop
    static async update(req: Request, res: Response) {
        try {
            const crop = await CropService.updateCrop(req.params.id, req.body);
            res.json(crop);
        } catch (error) {
            res.status(500).json({ error: "Error updating crop" });
        }
    }

    // ✅ Delete Crop
    static async delete(req: Request, res: Response) {
        try {
            await CropService.deleteCrop(req.params.id);
            res.json({ message: "Crop deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: "Error deleting crop" });
        }
    }
}
