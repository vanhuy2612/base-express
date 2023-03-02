import UserModel from "../model/User";
import { BaseController } from "./Base";

export default class UserController extends BaseController {
    model = UserModel
}