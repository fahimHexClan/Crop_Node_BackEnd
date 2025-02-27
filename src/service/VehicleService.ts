import VehicleModel from "../Models/vehicleModel";


export class VehicleService {
    // ✅ Create Vehicle
    static async createVehicle(data: any) {
        return await VehicleModel.create({ data });
    }

    // ✅ Get All Vehicles
    static async getAllVehicles() {
        return await VehicleModel.findMany();
    }

    // ✅ Get Vehicle by ID
    static async getVehicleById(id: string) {
        return await VehicleModel.findUnique({ where: { vehicleId: id } });
    }

    // ✅ Update Vehicle
    static async updateVehicle(id: string, data: any) {
        return await VehicleModel.update({ where: { vehicleId: id }, data });
    }

    // ✅ Delete Vehicle
    static async deleteVehicle(id: string) {
        return await VehicleModel.delete({ where: { vehicleId: id } });
    }
}
