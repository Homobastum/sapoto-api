import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class StatutTicketModel extends Schema {
    constructor() {
        // Modèle
        super({
            code:       { type: String, required: true, unique: true },
            libelle:    { type: String, required: true },
        }, {
            versionKey: false // Pas de versionning avec le champ __v
        });

        // Plugins
        this.plugin(uniqueValidator); // S'assurer de la bonne unicité des champs uniques
    }
}

const modele = mongoose.model('StatutTicket', new StatutTicketModel());
export default modele;