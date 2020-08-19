import { Request, Response, NextFunction } from 'express';
import model from '../models/TicketModel';

class TicketController {
    constructor () {}

    /**
     * Récupérer la liste de tous les tickets
     */
    getTickets (req: Request, res: Response, next: NextFunction) {
        model
            .find()
            .then((tickets) => res.status(200).json(tickets))
            .catch((error) => res.status(400).json({ error }));
    }

    /**
     * Récupérer un ticket à partir de son identifiant unique
     */
    getTicketById (req: Request, res: Response, next: NextFunction) {
        model
            .findOne({ _id: req.params.id })
            .then((ticket) => res.status(200).json(ticket))
            .catch((error) => res.status(404).json({ error }));
    }

    /**
     * Créer un ticket
     */
    creerTicket (req: Request, res: Response, next: NextFunction) {
        const ticket = new model({ ...req.body });

        ticket
            .save()
            .then(() => res.status(201).json({ message: 'Le ticket a bien été créé.' }))
            .catch((error) => res.status(400).json({ error }));
    }

    /**
     * Modifier un ticket
     */
    updateTicket (req: Request, res: Response, next: NextFunction) {
        model
            .updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Le ticket a bien été mis à jour.' }))
            .catch((error) => res.status(400).json({ error }));
    }

    /**
     * Supprimer un ticket
     */
    deleteTicketById (req: Request, res: Response, next: NextFunction) {
        model
            .deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Le ticket a bien été supprimé.' }))
            .catch((error) => res.status(400).json({ error }));
    }
}

const controller = new TicketController();
export default controller;