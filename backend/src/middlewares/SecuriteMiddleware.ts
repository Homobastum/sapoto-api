import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

class SecuriteMiddleware {
    constructor() { }

    etreAuthentifie (req: Request, res: Response, next: NextFunction) {
        try {
            const token = req.headers.authorization.split(' ')[1];
            const decodedToken: any = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
            const userId = decodedToken.userId;

            if (req.body.userId && req.body.userId !== userId) {
                throw 'Identifiant utilisateur invalide.';
            } else {
                next();
            }
        } catch {
            res.status(401).json({ error: 'Requête invalide.' });
        }
    }
}

const middleware = new SecuriteMiddleware();
export default middleware;