import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { UserService } from './services/user/UserService';
import { SupportService } from './services/support/SupportService';

/**
 * Classe pour démarrer un serveur HTTP sur le port souhaité
 */
export class Serveur {
    /**
     * Constructeur de la classe Serveur
     * 
     * @param port Port du serveur HTTP
     */
    constructor (public port: number) {
        this.port = port;
        this.connecter();
    }

    /**
     * Création et paramétrage du serveur HTTP avec Express
     */
    creer () {
        const app = express();

        /* Middlewares express (applicatifs) */
        // Parser JSON
        app.use(bodyParser.json(), (req, res, next) => {
            next();
        });

        // Autoriser le Cross-Origin Resource Sharing
        app.use(cors(), (req, res, next) => {
            next();
        });

        /* API */
        // Point d'entrée
        app.get("/", (req, res, next) => {
            res.send("TEST API REST");
            next();
        });

        // Services
        const userService = new UserService(app);
        const supportService = new SupportService(app);

        return app;
    }

    /**
     * Connexion au serveur HTTP
     */
    connecter () {
        const app = this.creer();
        
        app.listen(this.port, () => {
            console.log('Serveur démarré sur le port: ' + this.port);
        });
    }
}