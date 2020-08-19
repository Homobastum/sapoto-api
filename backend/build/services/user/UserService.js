"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var MongoDB_1 = require("../../MongoDB");
var UserRouting_1 = __importDefault(require("./routes/UserRouting"));
var UserService = /** @class */ (function () {
    function UserService(app) {
        this.app = app;
        this.uri = "mongodb+srv://github:27rZKXFnDsea3EtV@hb-lab.iajpl.mongodb.net/sapoto?retryWrites=true&w=majority";
        var bdd = new MongoDB_1.MongoDB(this.uri);
        bdd.connecter();
        this.getServices();
    }
    UserService.prototype.getServices = function () {
        this.app.use("/users", UserRouting_1.default);
    };
    return UserService;
}());
exports.UserService = UserService;
