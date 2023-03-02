import prismaCliet from "../../lib/core/database";

export default class BaseModel {
    prisma = prismaCliet;
    model 

    static async findMany(params) {
        return await this.model.findMany(params);
    }
}