import UseModel from "../Models/UserModel";

export const getAllUser = async () => {
    return await UseModel.findMany();
};

export const createUser = async (data: { name:string,email:string }) => {
    return await UseModel.create({ data });
};