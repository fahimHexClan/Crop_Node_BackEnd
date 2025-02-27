import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class MonitoringService {
    // ✅ Create Monitoring Entry
    static async createMonitoring(data: any) {
        return await prisma.monitoring.create({ data });
    }

    // ✅ Get All Monitoring Entries
    static async getAllMonitoring() {
        return await prisma.monitoring.findMany();
    }

    // ✅ Get Monitoring Entry by ID
    static async getMonitoringById(id: string) {
        return await prisma.monitoring.findUnique({ where: { monitoringId: id } });
    }

    // ✅ Update Monitoring Entry
    static async updateMonitoring(id: string, data: any) {
        return await prisma.monitoring.update({ where: { monitoringId: id }, data });
    }

    // ✅ Delete Monitoring Entry
    static async deleteMonitoring(id: string) {
        return await prisma.monitoring.delete({ where: { monitoringId: id } });
    }
}
