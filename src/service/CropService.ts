import CropModel from "../Models/cropModel";

export class CropService {
    // ✅ Create Crop
    static async createCrop(data: any) {
        return await CropModel.create({ data });
    }

    // ✅ Get All Crops
    static async getAllCrops() {
        return await CropModel.findMany();
    }

    // ✅ Get Crop by ID
    static async getCropById(cropId: string) {
        return await CropModel.findUnique({ where: { cropId } });
    }

    // ✅ Update Crop
    static async updateCrop(cropId: string, data: any) {
        return await CropModel.update({ where: { cropId }, data });
    }

    // ✅ Delete Crop
    static async deleteCrop(cropId: string) {
        return await CropModel.delete({ where: { cropId } });
    }
}
