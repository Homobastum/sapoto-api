import mongoose from 'mongoose';

export class MongoDB {
    constructor (public uri: string) {}

    connecter () {
        mongoose.connect(this.uri, { 
            useNewUrlParser: true, // Supprimer le warning de dépréciation
            useUnifiedTopology: true, // Supprimer le warning de dépréciation
            useCreateIndex: true // Supprimer le warning de dépréciation
        }, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Connexion à MongoDB réussie.');
            }
        });
    }

    deconnecter () {
        mongoose.connection.close(function () {
			console.log('Déconnexion de MongoDB réussie.');
		});
    }
}