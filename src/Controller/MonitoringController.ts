import { Request, Response } from "express";
import { MonitoringService } from "../service/MonitoringService";

export class MonitoringController {
    // ✅ Create Monitoring Entry
    static async create(req: Request, res: Response) {
        try {
            const monitoring = await MonitoringService.createMonitoring(req.body);
            res.status(201).json(monitoring);
        } catch (error) {
            res.status(500).json({ error: "Error creating monitoring entry" });
        }
    }

    // ✅ Get All Monitoring Entries
    static async getAll(req: Request, res: Response) {
        try {
            const monitoringEntries = await MonitoringService.getAllMonitoring();
            res.json(monitoringEntries);
        } catch (error) {
            res.status(500).json({ error: "Error fetching monitoring entries" });
        }
    }

    // ✅ Get Monitoring Entry by ID
    static async getById(req: Request, res: Response) {
        try {
            const monitoring = await MonitoringService.getMonitoringById(req.params.id);
            if (!monitoring) return res.status(404).json({ error: "Monitoring entry not found" });
            res.json(monitoring);
        } catch (error) {
            res.status(500).json({ error: "Error fetching monitoring entry" });
        }
    }

    // ✅ Update Monitoring Entry
    static async update(req: Request, res: Response) {
        try {
            const monitoring = await MonitoringService.updateMonitoring(req.params.id, req.body);
            res.json(monitoring);
        } catch (error) {
            res.status(500).json({ error: "Error updating monitoring entry" });
        }
    }

    // ✅ Delete Monitoring Entry
    static async delete(req: Request, res: Response) {
        try {
            await MonitoringService.deleteMonitoring(req.params.id);
            res.json({ message: "Monitoring entry deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: "Error deleting monitoring entry" });
        }
    }
}
