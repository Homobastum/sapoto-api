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
var TicketModel_1 = __importDefault(require("../models/TicketModel"));
var TicketController = /** @class */ (function () {
    function TicketController() {
    }
    /**
     * Récupérer la liste de tous les tickets
     */
    TicketController.prototype.getTickets = function (req, res, next) {
        TicketModel_1.default
            .find()
            .then(function (tickets) { return res.status(200).json(tickets); })
            .catch(function (error) { return res.status(400).json({ error: error }); });
    };
    /**
     * Récupérer un ticket à partir de son identifiant unique
     */
    TicketController.prototype.getTicketById = function (req, res, next) {
        TicketModel_1.default
            .findOne({ _id: req.params.id })
            .then(function (ticket) { return res.status(200).json(ticket); })
            .catch(function (error) { return res.status(404).json({ error: error }); });
    };
    /**
     * Créer un ticket
     */
    TicketController.prototype.creerTicket = function (req, res, next) {
        var ticket = new TicketModel_1.default(__assign({}, req.body));
        ticket
            .save()
            .then(function () { return res.status(201).json({ message: 'Le ticket a bien été créé.' }); })
            .catch(function (error) { return res.status(400).json({ error: error }); });
    };
    /**
     * Modifier un ticket
     */
    TicketController.prototype.updateTicket = function (req, res, next) {
        TicketModel_1.default
            .updateOne({ _id: req.params.id }, __assign(__assign({}, req.body), { _id: req.params.id }))
            .then(function () { return res.status(200).json({ message: 'Le ticket a bien été mis à jour.' }); })
            .catch(function (error) { return res.status(400).json({ error: error }); });
    };
    /**
     * Supprimer un ticket
     */
    TicketController.prototype.deleteTicketById = function (req, res, next) {
        TicketModel_1.default
            .deleteOne({ _id: req.params.id })
            .then(function () { return res.status(200).json({ message: 'Le ticket a bien été supprimé.' }); })
            .catch(function (error) { return res.status(400).json({ error: error }); });
    };
    return TicketController;
}());
var controller = new TicketController();
exports.default = controller;
