import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class VehicleService {
    // ✅ Create Vehicle
    static async createVehicle(data: any) {
        return await prisma.vehicle.create({ data });
    }

    // ✅ Get All Vehicles
    static async getAllVehicles() {
        return await prisma.vehicle.findMany();
    }

    // ✅ Get Vehicle by ID
    static async getVehicleById(id: string) {
        return await prisma.vehicle.findUnique({ where: { vehicleId: id } });
    }

    // ✅ Update Vehicle
    static async updateVehicle(id: string, data: any) {
        return await prisma.vehicle.update({ where: { vehicleId: id }, data });
    }

    // ✅ Delete Vehicle
    static async deleteVehicle(id: string) {
        return await prisma.vehicle.delete({ where: { vehicleId: id } });
    }
}
