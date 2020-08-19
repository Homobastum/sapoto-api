import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import model from '../models/UserModel';

class UserController {
    constructor () {}

    /**
     * Récupérer la liste de tous les utilisateurs
     */
    getUsers (req: Request, res: Response, next: NextFunction) {
        model
            .find()
            .then((users) => res.status(200).json(users))
            .catch((error) => res.status(400).json({ error }));
    }

    /**
     * Récupérer un utilisateur à partir de son identifiant unique
     */
    getUserById (req: Request, res: Response, next: NextFunction) {
        model
            .findOne({ _id: req.params.id })
            .then((user) => res.status(200).json(user))
            .catch((error) => res.status(404).json({ error }));
    }

    /**
     * Authentifier un utilisateur
     */
    signin (req: Request, res: Response, next: NextFunction) {
        model.findOne({ email: req.body.email })
            .then((user: any) => {
                if (!user) {
                    return res.status(401).json({ error: 'Utilisateur inexistant.' });
                }

                bcrypt
                    .compare(req.body.password, user.password, (error, valid) => {
                        if (valid) {
                            return res.status(200).json({
                                userId: user._id,
                                userName: user.name,
                                token: jwt.sign(
                                    { userId: user._id },
                                    'RANDOM_TOKEN_SECRET',
                                    { expiresIn: '24h' }
                                )
                            });
                        } else {
                            return res.status(401).json({ error: 'Mot de passe incorrect.' });
                        }

                        
                    });
            })
            .catch((error) => res.status(500).json({ error }));
    }

    /**
     * Créer un utilisateur
     */
    signup (req: Request, res: Response, next: NextFunction) {
        bcrypt
            .hash(req.body.password, 10, (error, hash) => {
                const user = new model({
                    name: req.body.name,
                    email: req.body.email,
                    password: hash
                });

                user
                    .save()
                    .then(() => res.status(201).json({ message: 'L\'utilisateur a bien été créé.' }))
                    .catch((error) => res.status(400).json({ error }));
            });
    }

    /**
     * Modifier un utilisateur
     */
    updateUser (req: Request, res: Response, next: NextFunction) {
        model
            .updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
            .then(() => res.status(200).json({ message: 'L\'utilisateur a bien été mis à jour.' }))
            .catch((error) => res.status(400).json({ error }));
    }

    /**
     * Supprimer un utilisateur
     */
    deleteUserById (req: Request, res: Response, next: NextFunction) {
        model
            .deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'L\'utilisateur a bien été supprimé.' }))
            .catch((error) => res.status(400).json({ error }));
    }
}

const controller = new UserController();
export default controller;