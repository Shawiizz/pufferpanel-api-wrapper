import {PufferClient} from "./PufferClient";
import {DeploymentData} from "../interfaces/PufferInterfaces";

export declare class PufferNode {
    private client;
    private id;
    private name;
    private privateHost;
    private privatePort;
    private publicHost;
    private publicPort;
    private sftpPort;
    setClient(client: PufferClient): this;
    getClient(): PufferClient;
    setId(id: number): this;
    getId(): number;
    getName(): string;
    setName(name: string): this;
    getPrivateHost(): string;
    setPrivateHost(privateHost: string): this;
    getPrivatePort(): number;
    setPrivatePort(privatePort: number): this;
    getPublicHost(): string;
    setPublicHost(publicHost: string): this;
    getPublicPort(): number;
    setPublicPort(publicPort: number): this;
    getSftpPort(): number;
    setSftpPort(sftpPort: number): this;
    create(): Promise<import("axios").AxiosResponse<unknown, any>>;
    delete(): Promise<import("axios").AxiosResponse<unknown, any>>;
    update(): Promise<import("axios").AxiosResponse<unknown, any>>;
    getDeploymentData(): Promise<DeploymentData>;
}
