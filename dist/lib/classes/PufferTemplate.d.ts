import {PufferClient} from "./PufferClient";

export declare class PufferTemplate {
    private client;
    private type;
    private display;
    private name;
    private run;
    private requirements;
    setClient(client: PufferClient): this;
    getClient(): PufferClient;
    setType(type: string): this;
    getType(): string;
    setDisplay(display: string): this;
    getDisplay(): string;
    setName(name: string): this;
    getName(): string;
    setRun(run: object): this;
    getRun(): object;
    setRequirements(requirements: object): this;
    getRequirements(): object;
}
