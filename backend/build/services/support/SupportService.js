"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupportService = void 0;
var MongoDB_1 = require("../../MongoDB");
var TicketRouting_1 = __importDefault(require("./routes/TicketRouting"));
var SupportService = /** @class */ (function () {
    function SupportService(app) {
        this.app = app;
        this.uri = "mongodb+srv://github:27rZKXFnDsea3EtV@hb-lab.iajpl.mongodb.net/sapoto?retryWrites=true&w=majority";
        var bdd = new MongoDB_1.MongoDB(this.uri);
        bdd.connecter();
        this.getServices();
    }
    SupportService.prototype.getServices = function () {
        this.app.use("/tickets", TicketRouting_1.default);
    };
    return SupportService;
}());
exports.SupportService = SupportService;
