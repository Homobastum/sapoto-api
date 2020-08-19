"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDB = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var MongoDB = /** @class */ (function () {
    function MongoDB(uri) {
        this.uri = uri;
    }
    MongoDB.prototype.connecter = function () {
        mongoose_1.default.connect(this.uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true // Supprimer le warning de dépréciation
        }, function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Connexion à MongoDB réussie.');
            }
        });
    };
    MongoDB.prototype.deconnecter = function () {
        mongoose_1.default.connection.close(function () {
            console.log('Déconnexion de MongoDB réussie.');
        });
    };
    return MongoDB;
}());
exports.MongoDB = MongoDB;
