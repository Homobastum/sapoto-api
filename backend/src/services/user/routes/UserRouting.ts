import { Router } from 'express';
import { Routing } from '../../../interfaces/Routing';
import middleware from '../../../middlewares/SecuriteMiddleware';
import controller from '../controllers/UserController';

class UserRouting implements Routing {
    router = Router();

    constructor () {
        // Services
        this.get();
        this.post();
        this.put();
        this.delete();
    }

    /**
     * Appeler les routes utilisant le verbe HTTP GET
     */
    get () {
        this.getUsers();
        this.getUserById();
    }

    private getUsers () {
        this.router.get('/', middleware.etreAuthentifie, controller.getUsers);
    }

    private getUserById () {
        this.router.get('/:id', middleware.etreAuthentifie, controller.getUserById);
    }

    /**
     * Appeler les routes utilisant le verbe HTTP POST
     */
    post () {
        this.signin();
        this.signup();
    }

    private signin() {
        this.router.post('/signin', controller.signin);
    }

    private signup () {
        this.router.post('/', controller.signup);
    }

    /**
     * Appeler les routes utilisant le verbe HTTP PUT
     */
    put () {
        this.updateUser();    
    }

    private updateUser () {
        this.router.put('/:id', middleware.etreAuthentifie, controller.updateUser);
    }

    /**
     * Appeler les routes utilisant le verbe HTTP DELETE
     */
    delete () {
        this.deleteUserById();
    }

    private deleteUserById () {
        this.router.delete('/:id', middleware.etreAuthentifie, controller.deleteUserById);
    }
}

const userRouting = new UserRouting().router;
export default userRouting;