"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var User = /** @class */ (function () {
    function User() {
        this.modeliser();
    }
    User.prototype.modeliser = function () {
        this.model = mongoose_1.default.model("User", this.schematiser());
    };
    User.prototype.schematiser = function () {
        return new mongoose_1.default.Schema({
            _id: { type: String, required: true },
            name: { type: String, required: true },
            email: { type: String, required: true },
            password: { type: String, required: true },
        });
    };
    return User;
}());
exports.User = User;
