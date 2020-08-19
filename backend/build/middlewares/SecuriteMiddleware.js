"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var SecuriteMiddleware = /** @class */ (function () {
    function SecuriteMiddleware() {
    }
    SecuriteMiddleware.prototype.etreAuthentifie = function (req, res, next) {
        try {
            var token = req.headers.authorization.split(' ')[1];
            var decodedToken = jsonwebtoken_1.default.verify(token, 'RANDOM_TOKEN_SECRET');
            var userId = decodedToken.userId;
            if (req.body.userId && req.body.userId !== userId) {
                throw 'Identifiant utilisateur invalide.';
            }
            else {
                next();
            }
        }
        catch (_a) {
            res.status(401).json({ error: 'Requête invalide.' });
        }
    };
    return SecuriteMiddleware;
}());
var middleware = new SecuriteMiddleware();
exports.default = middleware;
