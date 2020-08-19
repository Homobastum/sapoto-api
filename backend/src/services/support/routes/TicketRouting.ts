import { Router } from 'express';
import { Routing } from '../../../interfaces/Routing';
import middleware from '../../../middlewares/SecuriteMiddleware';
import controller from '../controllers/TicketController';

class TicketRouting implements Routing {
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
        this.getTickets();
        this.getTicketById();
    }

    private getTickets () {
        this.router.get('/', middleware.etreAuthentifie, controller.getTickets);
    }

    private getTicketById () {
        this.router.get('/:id', middleware.etreAuthentifie, controller.getTicketById);
    }

    /**
     * Appeler les routes utilisant le verbe HTTP POST
     */
    post () {
        this.creerTicket();
    }

    private creerTicket () {
        this.router.post('/', middleware.etreAuthentifie, controller.creerTicket);
    }

    /**
     * Appeler les routes utilisant le verbe HTTP PUT
     */
    put () {
        this.updateTicket();    
    }

    private updateTicket () {
        this.router.put('/:id', middleware.etreAuthentifie, controller.updateTicket);
    }

    /**
     * Appeler les routes utilisant le verbe HTTP DELETE
     */
    delete () {
        this.deleteTicketById();
    }

    private deleteTicketById () {
        this.router.delete('/:id', middleware.etreAuthentifie, controller.deleteTicketById);
    }
}

const ticketRouting = new TicketRouting().router;
export default ticketRouting;