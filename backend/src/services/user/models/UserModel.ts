import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class UserModel extends Schema {
    constructor () {
        // Modèle
        super({
            name:       { type: String, required: true },
            email:      { type: String, required: true, unique: true },
            password:   { type: String, required: true }
        }, {
            versionKey: false // Pas de versionning avec le champ __v
        });

        // Plugins
        this.plugin(uniqueValidator); // S'assurer de la bonne unicité des champs uniques
    }
}

const modele = mongoose.model('User', new UserModel());
export default modele;