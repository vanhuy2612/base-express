import { BaseController } from "./Base";

export default class AuthController extends BaseController{

    async login(req, res, next) {
        return true;
    }
}