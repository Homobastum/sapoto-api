"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serveur = void 0;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var mongoose_1 = __importDefault(require("mongoose"));
var UserService_1 = require("./services/UserService");
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
        /* Middlewares */
        app.use(body_parser_1.default.json());
        app.use(cors_1.default());
        /* Connexion à MongoDB */
        var uri = 'mongodb+srv://Homobastum:sloiieOs6O4a3ds0@hb-lab.iajpl.mongodb.net/sample_mflix?retryWrites=true&w=majority';
        mongoose_1.default.connect(uri, function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Connexion à MongoDB réussie.');
            }
        });
        /* API */
        app.get('/', function (req, res) {
            res.send('API REST');
        });
        var userService = new UserService_1.UserService(app);
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
