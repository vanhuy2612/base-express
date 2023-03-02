import BaseModel from "./Base"

export default class UserModel extends BaseModel {
    model = this.prisma.user;
}