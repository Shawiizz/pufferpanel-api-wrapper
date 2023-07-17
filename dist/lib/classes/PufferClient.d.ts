import {PufferAuthenticatorBuilder} from "./AuthenticatorBuilder";
import {PufferServer} from "./PufferServer";
import {PufferNode} from "./PufferNode";
import {PufferUser} from "./PufferUser";
import {AxiosResponse} from "axios";
import {GetServersQuery} from "../interfaces/PufferInterfaces";

export declare class PufferClient {
    private authenticator;
    constructor(authenticator: PufferAuthenticatorBuilder);
    getNodes(): Promise<PufferNode[]>;
    getServers(query?: GetServersQuery): Promise<PufferServer[]>;
    getServer(id: string): Promise<PufferServer>;
    getNode(id: number): Promise<PufferNode>;
    getSelf(): Promise<PufferUser>;
    sendRequest<T>(method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH', path: string, data?: any): Promise<AxiosResponse<T>>;
}
