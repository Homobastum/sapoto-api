import { Service } from "../../interfaces/Service";
import { MongoDB } from "../../MongoDB";
import userRouting from "./routes/UserRouting";

export class UserService implements Service {
    bdd: MongoDB;
    uri: string =
        "mongodb+srv://github:27rZKXFnDsea3EtV@hb-lab.iajpl.mongodb.net/sapoto?retryWrites=true&w=majority";

    constructor(public app: any) {
        const bdd = new MongoDB(this.uri);
        bdd.connecter();
        this.getServices();
    }

    getServices() {
        this.app.use("/users", userRouting);
    }
}