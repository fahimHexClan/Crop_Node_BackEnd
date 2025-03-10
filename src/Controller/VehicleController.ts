import { Request, Response } from "express";
import { VehicleService } from "../service/VehicleService";

export class VehicleController {
    static async create(req: Request, res: Response) {
        try {
            const vehicle = await VehicleService.createVehicle(req.body);
            res.status(201).json(vehicle);
        } catch (error) {
            res.status(500).json({ error: "Error creating vehicle" });
        }
    }

    static async getAll(req: Request, res: Response) {
        try {
            const vehicles = await VehicleService.getAllVehicles();
            res.json(vehicles);
        } catch (error) {
            res.status(500).json({ error: "Error fetching vehicles" });
        }
    }

    static async getById(req: Request, res: Response) {
        try {
            const vehicle = await VehicleService.getVehicleById(req.params.id);
            if (!vehicle) return res.status(404).json({ error: "Vehicle not found" });
            res.json(vehicle);
        } catch (error) {
            res.status(500).json({ error: "Error fetching vehicle" });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const vehicle = await VehicleService.updateVehicle(req.params.id, req.body);
            res.json(vehicle);
        } catch (error) {
            res.status(500).json({ error: "Error updating vehicle" });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            await VehicleService.deleteVehicle(req.params.id);
            res.json({ message: "Vehicle deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: "Error deleting vehicle" });
        }
    }
}
