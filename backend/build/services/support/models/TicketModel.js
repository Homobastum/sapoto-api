"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
var TicketModel = /** @class */ (function (_super) {
    __extends(TicketModel, _super);
    function TicketModel() {
        var _this = 
        // Modèle
        _super.call(this, {
            sujet: { type: String, required: true },
            description: { type: String, required: true, unique: true },
            // statut:         {
            //                     type: Schema.Types.ObjectId,
            //                     ref: "Statut"
            //                 },
            demandeur: {
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "User"
            },
        }, {
            versionKey: false // Pas de versionning avec le champ __v
        }) || this;
        // Plugins
        _this.plugin(mongoose_unique_validator_1.default); // S'assurer de la bonne unicité des champs uniques
        return _this;
    }
    return TicketModel;
}(mongoose_1.Schema));
var modele = mongoose_1.default.model('Tickets', new TicketModel());
exports.default = modele;
