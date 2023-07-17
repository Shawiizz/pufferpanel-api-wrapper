import {PufferClient} from "./PufferClient";

export class OAuth2Client {
    private client!: PufferClient;
    private id!: string;
    private name!: string;
    private description!: string;
    private secret?: string;

    setClient(client: PufferClient) {
        this.client = client;
        return this;
    }

    getClient() {
        return this.client;
    }

    setId(id: string) {
        this.id = id;
        return this;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
        return this;
    }

    getDescription() {
        return this.description;
    }

    setDescription(description: string) {
        this.description = description;
        return this;
    }

    getSecret() {
        return this.secret;
    }

    setSecret(secret: string) {
        this.secret = secret;
        return this;
    }
}
