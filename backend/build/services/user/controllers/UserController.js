"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt_1 = __importDefault(require("bcrypt"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var UserModel_1 = __importDefault(require("../models/UserModel"));
var UserController = /** @class */ (function () {
    function UserController() {
    }
    /**
     * Récupérer la liste de tous les utilisateurs
     */
    UserController.prototype.getUsers = function (req, res, next) {
        UserModel_1.default
            .find()
            .then(function (users) { return res.status(200).json(users); })
            .catch(function (error) { return res.status(400).json({ error: error }); });
    };
    /**
     * Récupérer un utilisateur à partir de son identifiant unique
     */
    UserController.prototype.getUserById = function (req, res, next) {
        UserModel_1.default
            .findOne({ _id: req.params.id })
            .then(function (user) { return res.status(200).json(user); })
            .catch(function (error) { return res.status(404).json({ error: error }); });
    };
    /**
     * Authentifier un utilisateur
     */
    UserController.prototype.signin = function (req, res, next) {
        UserModel_1.default.findOne({ email: req.body.email })
            .then(function (user) {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur inexistant.' });
            }
            bcrypt_1.default
                .compare(req.body.password, user.password, function (error, valid) {
                if (valid) {
                    return res.status(200).json({
                        userId: user._id,
                        userName: user.name,
                        token: jsonwebtoken_1.default.sign({ userId: user._id }, 'RANDOM_TOKEN_SECRET', { expiresIn: '24h' })
                    });
                }
                else {
                    return res.status(401).json({ error: 'Mot de passe incorrect.' });
                }
            });
        })
            .catch(function (error) { return res.status(500).json({ error: error }); });
    };
    /**
     * Créer un utilisateur
     */
    UserController.prototype.signup = function (req, res, next) {
        bcrypt_1.default
            .hash(req.body.password, 10, function (error, hash) {
            var user = new UserModel_1.default({
                name: req.body.name,
                email: req.body.email,
                password: hash
            });
            user
                .save()
                .then(function () { return res.status(201).json({ message: 'L\'utilisateur a bien été créé.' }); })
                .catch(function (error) { return res.status(400).json({ error: error }); });
        });
    };
    /**
     * Modifier un utilisateur
     */
    UserController.prototype.updateUser = function (req, res, next) {
        UserModel_1.default
            .updateOne({ _id: req.params.id }, __assign(__assign({}, req.body), { _id: req.params.id }))
            .then(function () { return res.status(200).json({ message: 'L\'utilisateur a bien été mis à jour.' }); })
            .catch(function (error) { return res.status(400).json({ error: error }); });
    };
    /**
     * Supprimer un utilisateur
     */
    UserController.prototype.deleteUserById = function (req, res, next) {
        UserModel_1.default
            .deleteOne({ _id: req.params.id })
            .then(function () { return res.status(200).json({ message: 'L\'utilisateur a bien été supprimé.' }); })
            .catch(function (error) { return res.status(400).json({ error: error }); });
    };
    return UserController;
}());
var controller = new UserController();
exports.default = controller;
