"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serveur = void 0;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var UserService_1 = require("./services/user/UserService");
var SupportService_1 = require("./services/support/SupportService");
/**
 * Classe pour démarrer un serveur HTTP sur le port souhaité
 */
var Serveur = /** @class */ (function () {
    /**
     * Constructeur de la classe Serveur
     *
     * @param port Port du serveur HTTP
     */
    function Serveur(port) {
        this.port = port;
        this.port = port;
        this.connecter();
    }
    /**
     * Création et paramétrage du serveur HTTP avec Express
     */
    Serveur.prototype.creer = function () {
        var app = express_1.default();
        /* Middlewares express (applicatifs) */
        // Parser JSON
        app.use(body_parser_1.default.json(), function (req, res, next) {
            next();
        });
        // Autoriser le Cross-Origin Resource Sharing
        app.use(cors_1.default(), function (req, res, next) {
            next();
        });
        /* API */
        // Point d'entrée
        app.get("/", function (req, res, next) {
            res.send("TEST API REST");
            next();
        });
        // Services
        var userService = new UserService_1.UserService(app);
        var supportService = new SupportService_1.SupportService(app);
        return app;
    };
    /**
     * Connexion au serveur HTTP
     */
    Serveur.prototype.connecter = function () {
        var _this = this;
        var app = this.creer();
        app.listen(this.port, function () {
            console.log('Serveur démarré sur le port: ' + _this.port);
        });
    };
    return Serveur;
}());
exports.Serveur = Serveur;
