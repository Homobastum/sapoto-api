"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    UserModel.prototype.get = function () {
        console.log(mongoose_1.default.model('User', this.schematiser()));
        return mongoose_1.default.model('User', this.schematiser());
    };
    UserModel.prototype.schematiser = function () {
        return new mongoose_1.default.Schema({
            _id: { type: String, required: true },
            name: { type: String, required: true },
            email: { type: String, required: true },
            password: { type: String, required: true },
        });
    };
    return UserModel;
}());
exports.UserModel = UserModel;
