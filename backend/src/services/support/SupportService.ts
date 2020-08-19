import { Service } from "../../interfaces/Service";
import { MongoDB } from "../../MongoDB";
import ticketRouting from "./routes/TicketRouting";

export class SupportService implements Service {
    bdd: MongoDB;
    uri: string =
        "mongodb+srv://github:27rZKXFnDsea3EtV@hb-lab.iajpl.mongodb.net/sapoto?retryWrites=true&w=majority";

    constructor(public app: any) {
        const bdd = new MongoDB(this.uri);
        bdd.connecter();
        this.getServices();
    }

    getServices() {
        this.app.use("/tickets", ticketRouting);
    }
}