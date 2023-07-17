import {PufferClient} from "./PufferClient";

export class PufferTemplate {
    private client!: PufferClient;
    private type!: string;
    private display!: string;
    private name!: string;
    private run!: object;
    private requirements!: object;

    setClient(client: PufferClient) {
        this.client = client;
        return this;
    }

    getClient() {
        return this.client;
    }

    setType(type: string) {
        this.type = type;
        return this;
    }

    getType() {
        return this.type;
    }

    setDisplay(display: string) {
        this.display = display;
        return this;
    }

    getDisplay() {
        return this.display;
    }

    setName(name: string) {
        this.name = name;
        return this;
    }

    getName() {
        return this.name;
    }

    setRun(run: object) {
        this.run = run;
        return this;
    }

    getRun() {
        return this.run;
    }

    setRequirements(requirements: object) {
        this.requirements = requirements;
        return this;
    }

    getRequirements() {
        return this.requirements;
    }
}