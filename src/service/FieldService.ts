import FieldModel from "../Models/FieldModel";

export class FieldService {
    // ✅ Create Field
    static async createField(data: any) {
        return await FieldModel.create({ data });
    }

    // ✅ Get All Fields
    static async getAllFields() {
        return await FieldModel.findMany();
    }

    // ✅ Get Field by ID
    static async getFieldById(id: number) {
        return await FieldModel.findUnique({ where: { id } });
    }

    // ✅ Update Field
    static async updateField(id: number, data: any) {
        return await FieldModel.update({ where: { id }, data });
    }

    // ✅ Delete Field
    static async deleteField(id: number) {
        return await FieldModel.delete({ where: { id } });
    }
}
