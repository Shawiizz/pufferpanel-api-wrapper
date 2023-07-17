import {PufferClient} from "./PufferClient";
import {PufferNode} from "./PufferNode";
import {OAuth2Client} from "./OAuth2Client";
import {PufferPermissions, PufferServerUserPermissions} from "../interfaces/PufferInterfaces";

export interface ServerStats {
    cpu: number;
    memory: number;
}
export interface ServerStatus {
    running: boolean;
}
export declare class PufferServer {
    private client;
    private id;
    private data;
    private ip;
    private name;
    private node;
    private nodeId;
    private port;
    private type;
    private users;
    private permissions;
    setClient(client: PufferClient): this;
    getClient(): PufferClient;
    setId(id: string): this;
    getId(): string;
    getData(): any;
    setData(data: any): this;
    getIp(): string;
    setIp(ip: string): this;
    getName(): string;
    setName(name: string): this;
    getNode(): PufferNode;
    setNode(node: PufferNode): this;
    getNodeId(): number;
    setNodeId(nodeId: number): this;
    getPort(): number;
    setPort(port: number): this;
    getType(): string;
    setType(type: string): this;
    getUsers(): {
        scopes: string[];
        username: string;
    }[];
    setUsers(users: {
        scopes: string[];
        username: string;
    }[]): this;
    getPermissions(): PufferPermissions | null;
    setPermissions(permissions: PufferPermissions | null): this;
    start(): Promise<void>;
    stop(): Promise<void>;
    reload(): Promise<void>;
    install(): Promise<void>;
    kill(): Promise<void>;
    getStats(): Promise<ServerStats>;
    getStatus(): Promise<ServerStatus>;
    delete(): Promise<import("axios").AxiosResponse<unknown, any>>;
    rename(name: string): Promise<void>;
    getOAuth2Clients(): Promise<OAuth2Client[]>;
    createOAuth2Client(name: string, description?: string): Promise<OAuth2Client>;
    deleteOAuth2Client(client: OAuth2Client): Promise<import("axios").AxiosResponse<unknown, any>>;
    getUsersWithPermissions(): Promise<{
        username: string;
        email: string;
        serverIdentifier: string;
        permissions: {
            admin: boolean;
            createServers: boolean;
            deleteServers: boolean;
            deployNodes: boolean;
            editNodes: boolean;
            editServerAdmin: boolean;
            editServerData: boolean;
            editServerUsers: boolean;
            editTemplates: boolean;
            editUsers: boolean;
            installServer: boolean;
            panelSettings: boolean;
            putServerFiles: boolean;
            sendServerConsole: boolean;
            sftpServer: boolean;
            startServer: boolean;
            stopServer: boolean;
            viewNodes: boolean;
            viewServerConsole: boolean;
            viewServerFiles: boolean;
            viewServerStats: boolean;
            viewServers: boolean;
            viewTemplates: boolean;
            viewUsers: boolean;
        };
    }[]>;
    setUserPermissions(email: string, permissions: Partial<PufferServerUserPermissions>): Promise<import("axios").AxiosResponse<unknown, any>>;
    deleteUser(email: string): Promise<import("axios").AxiosResponse<unknown, any>>;
}
