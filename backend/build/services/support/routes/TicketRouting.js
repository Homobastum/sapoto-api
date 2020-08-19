"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var SecuriteMiddleware_1 = __importDefault(require("../../../middlewares/SecuriteMiddleware"));
var TicketController_1 = __importDefault(require("../controllers/TicketController"));
var TicketRouting = /** @class */ (function () {
    function TicketRouting() {
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
    TicketRouting.prototype.get = function () {
        this.getTickets();
        this.getTicketById();
    };
    TicketRouting.prototype.getTickets = function () {
        this.router.get('/', SecuriteMiddleware_1.default.etreAuthentifie, TicketController_1.default.getTickets);
    };
    TicketRouting.prototype.getTicketById = function () {
        this.router.get('/:id', SecuriteMiddleware_1.default.etreAuthentifie, TicketController_1.default.getTicketById);
    };
    /**
     * Appeler les routes utilisant le verbe HTTP POST
     */
    TicketRouting.prototype.post = function () {
        this.creerTicket();
    };
    TicketRouting.prototype.creerTicket = function () {
        this.router.post('/', SecuriteMiddleware_1.default.etreAuthentifie, TicketController_1.default.creerTicket);
    };
    /**
     * Appeler les routes utilisant le verbe HTTP PUT
     */
    TicketRouting.prototype.put = function () {
        this.updateTicket();
    };
    TicketRouting.prototype.updateTicket = function () {
        this.router.put('/:id', SecuriteMiddleware_1.default.etreAuthentifie, TicketController_1.default.updateTicket);
    };
    /**
     * Appeler les routes utilisant le verbe HTTP DELETE
     */
    TicketRouting.prototype.delete = function () {
        this.deleteTicketById();
    };
    TicketRouting.prototype.deleteTicketById = function () {
        this.router.delete('/:id', SecuriteMiddleware_1.default.etreAuthentifie, TicketController_1.default.deleteTicketById);
    };
    return TicketRouting;
}());
var ticketRouting = new TicketRouting().router;
exports.default = ticketRouting;
