import CropModel from "../Models/cropModel";

export class CropService {
    static async createCrop(data: any) {
        return await CropModel.create({ data });
    }

    static async getAllCrops() {
        return await CropModel.findMany();
    }

    static async getCropById(cropId: string) {
        return await CropModel.findUnique({ where: { cropId } });
    }

    static async updateCrop(cropId: string, data: any) {
        return await CropModel.update({ where: { cropId }, data });
    }

    static async deleteCrop(cropId: string) {
        return await CropModel.delete({ where: { cropId } });
    }
}
