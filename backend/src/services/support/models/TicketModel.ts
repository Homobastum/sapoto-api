import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class TicketModel extends Schema {
    constructor () {
        // Modèle
        super({
            sujet:          { type: String, required: true },
            description:    { type: String, required: true, unique: true },
            // statut:         {
            //                     type: Schema.Types.ObjectId,
            //                     ref: "Statut"
            //                 },
            demandeur:      {
                                type: Schema.Types.ObjectId,
                                ref: "User"
                            },
            // gestionnaire:   {
            //                     type: Schema.Types.ObjectId,
            //                     ref: "User"
            //                 },
        }, {
            versionKey: false // Pas de versionning avec le champ __v
        });

        // Plugins
        this.plugin(uniqueValidator); // S'assurer de la bonne unicité des champs uniques
    }
}

const modele = mongoose.model('Tickets', new TicketModel());
export default modele;