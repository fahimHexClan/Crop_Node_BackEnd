import FieldModel from "../Models/FieldModel";

export class FieldService {
    static async createField(data: any) {
        return await FieldModel.create({ data });
    }

    static async getAllFields() {
        return await FieldModel.findMany();
    }

    static async getFieldById(fieldId: string) {
        return await FieldModel.findUnique({ where: { fieldId } });
    }

    static async updateField(fieldId: string, data: any) {
        return await FieldModel.update({ where: { fieldId }, data });
    }

    static async deleteField(fieldId: string) {
        return await FieldModel.delete({ where: { fieldId } });
    }
}
