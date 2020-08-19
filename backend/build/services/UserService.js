"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
var UserModel_1 = require("../models/UserModel");
var UserService = /** @class */ (function () {
    function UserService(app) {
        this.app = app;
        this.model = new UserModel_1.UserModel();
        this.model = new UserModel_1.UserModel();
        // Services
        this.get();
        this.post();
        this.put();
        this.patch();
        this.delete();
    }
    UserService.prototype.get = function () {
        var _this = this;
        this.app.get('/users', function (req, res) {
            _this.model.get().find(function (err, user) {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    res.send(user);
                }
            });
        });
        this.app.get('/users/:id', function (req, res) {
            _this.model.get().findById(req.params.id, function (err, user) {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    res.send(user);
                }
            });
        });
    };
    UserService.prototype.post = function () { };
    UserService.prototype.put = function () { };
    UserService.prototype.patch = function () { };
    UserService.prototype.delete = function () { };
    return UserService;
}());
exports.UserService = UserService;
