import MonitoringModel from "../Models/monitoringModel";


export class MonitoringService {
    static async createMonitoring(data: any) {
        return await MonitoringModel.create({ data });
    }

    static async getAllMonitoring() {
        return await MonitoringModel.findMany();
    }

    static async getMonitoringById(id: string) {
        return await MonitoringModel.findUnique({ where: { monitoringId: id } });
    }

    static async updateMonitoring(id: string, data: any) {
        return await MonitoringModel.update({ where: { monitoringId: id }, data });
    }

    static async deleteMonitoring(id: string) {
        return await MonitoringModel.delete({ where: { monitoringId: id } });
    }
}
