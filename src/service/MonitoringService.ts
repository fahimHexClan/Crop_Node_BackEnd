import MonitoringModel from "../Models/monitoringModel";


export class MonitoringService {
    // ✅ Create Monitoring Entry
    static async createMonitoring(data: any) {
        return await MonitoringModel.create({ data });
    }

    // ✅ Get All Monitoring Entries
    static async getAllMonitoring() {
        return await MonitoringModel.findMany();
    }

    // ✅ Get Monitoring Entry by ID
    static async getMonitoringById(id: string) {
        return await MonitoringModel.findUnique({ where: { monitoringId: id } });
    }

    // ✅ Update Monitoring Entry
    static async updateMonitoring(id: string, data: any) {
        return await MonitoringModel.update({ where: { monitoringId: id }, data });
    }

    // ✅ Delete Monitoring Entry
    static async deleteMonitoring(id: string) {
        return await MonitoringModel.delete({ where: { monitoringId: id } });
    }
}
