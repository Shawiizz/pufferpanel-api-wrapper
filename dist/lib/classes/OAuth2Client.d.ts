import {PufferClient} from "./PufferClient";

export declare class OAuth2Client {
    private client;
    private id;
    private name;
    private description;
    private secret?;
    setClient(client: PufferClient): this;
    getClient(): PufferClient;
    setId(id: string): this;
    getId(): string;
    getName(): string;
    setName(name: string): this;
    getDescription(): string;
    setDescription(description: string): this;
    getSecret(): string | undefined;
    setSecret(secret: string): this;
}
