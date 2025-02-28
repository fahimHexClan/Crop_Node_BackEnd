import VehicleModel from "../Models/vehicleModel";


export class VehicleService {
    static async createVehicle(data: any) {
        return await VehicleModel.create({ data });
    }

    static async getAllVehicles() {
        return await VehicleModel.findMany();
    }

    static async getVehicleById(id: string) {
        return await VehicleModel.findUnique({ where: { vehicleId: id } });
    }

    static async updateVehicle(id: string, data: any) {
        return await VehicleModel.update({ where: { vehicleId: id }, data });
    }

    static async deleteVehicle(id: string) {
        return await VehicleModel.delete({ where: { vehicleId: id } });
    }
}
