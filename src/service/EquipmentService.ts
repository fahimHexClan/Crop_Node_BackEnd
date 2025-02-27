import EquipmentModel from "../Models/EquipmentModel";

export class EquipmentService {
    // ✅ Create Equipment
    static async createEquipment(data: any) {
        return await EquipmentModel.create({ data });
    }

    // ✅ Get All Equipment
    static async getAllEquipment() {
        return await EquipmentModel.findMany();
    }

    // ✅ Get Equipment by ID
    static async getEquipmentById(id: number) {
        return await EquipmentModel.findUnique({ where: { id } });
    }

    // ✅ Update Equipment
    static async updateEquipment(id: number, data: any) {
        return await EquipmentModel.update({ where: { id }, data });
    }

    // ✅ Delete Equipment
    static async deleteEquipment(id: number) {
        return await EquipmentModel.delete({ where: { id } });
    }
}
