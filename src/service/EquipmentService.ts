import EquipmentModel from "../Models/EquipmentModel";

export class EquipmentService {
    static async createEquipment(data: any) {
        return await EquipmentModel.create({ data });
    }

    static async getAllEquipment() {
        return await EquipmentModel.findMany();
    }

    static async getEquipmentById(eqiipmentId: string) {
        return await EquipmentModel.findUnique({ where: { eqiipmentId } });
    }

    static async updateEquipment(eqiipmentId: string, data: any) {
        return await EquipmentModel.update({ where: { eqiipmentId }, data });
    }

    static async deleteEquipment(eqiipmentId: string) {
        return await EquipmentModel.delete({ where: { eqiipmentId } });
    }
}
