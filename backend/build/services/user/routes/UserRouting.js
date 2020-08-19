"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var SecuriteMiddleware_1 = __importDefault(require("../../../middlewares/SecuriteMiddleware"));
var UserController_1 = __importDefault(require("../controllers/UserController"));
var UserRouting = /** @class */ (function () {
    function UserRouting() {
        this.router = express_1.Router();
        // Services
        this.get();
        this.post();
        this.put();
        this.delete();
    }
    /**
     * Appeler les routes utilisant le verbe HTTP GET
     */
    UserRouting.prototype.get = function () {
        this.getUsers();
        this.getUserById();
    };
    UserRouting.prototype.getUsers = function () {
        this.router.get('/', SecuriteMiddleware_1.default.etreAuthentifie, UserController_1.default.getUsers);
    };
    UserRouting.prototype.getUserById = function () {
        this.router.get('/:id', SecuriteMiddleware_1.default.etreAuthentifie, UserController_1.default.getUserById);
    };
    /**
     * Appeler les routes utilisant le verbe HTTP POST
     */
    UserRouting.prototype.post = function () {
        this.signin();
        this.signup();
    };
    UserRouting.prototype.signin = function () {
        this.router.post('/signin', UserController_1.default.signin);
    };
    UserRouting.prototype.signup = function () {
        this.router.post('/', UserController_1.default.signup);
    };
    /**
     * Appeler les routes utilisant le verbe HTTP PUT
     */
    UserRouting.prototype.put = function () {
        this.updateUser();
    };
    UserRouting.prototype.updateUser = function () {
        this.router.put('/:id', SecuriteMiddleware_1.default.etreAuthentifie, UserController_1.default.updateUser);
    };
    /**
     * Appeler les routes utilisant le verbe HTTP DELETE
     */
    UserRouting.prototype.delete = function () {
        this.deleteUserById();
    };
    UserRouting.prototype.deleteUserById = function () {
        this.router.delete('/:id', SecuriteMiddleware_1.default.etreAuthentifie, UserController_1.default.deleteUserById);
    };
    return UserRouting;
}());
var userRouting = new UserRouting().router;
exports.default = userRouting;
