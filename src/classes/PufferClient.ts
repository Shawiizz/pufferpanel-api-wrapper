import {PufferAuthenticatorBuilder} from "./AuthenticatorBuilder";
import {PufferServer} from "./PufferServer";
import {PufferNode} from "./PufferNode";
import {PufferUser} from "./PufferUser";
import axios, {AxiosResponse} from "axios";
import {objectToQueryString} from "../util/Query";
import {
    GetServerRequest,
    GetServersQuery,
    GetServersRequest,
    NodeResponse,
    SelfUserResponse
} from "../interfaces/PufferInterfaces";

export class PufferClient {
    private authenticator: PufferAuthenticatorBuilder;

    constructor(authenticator: PufferAuthenticatorBuilder) {
        this.authenticator = authenticator;
    }

    async getNodes() {
        const response = await this.sendRequest<NodeResponse[]>('GET', `/api/nodes`)

        return response.data.map(node =>
            new PufferNode()
                .setClient(this)
                .setId(node.id)
                .setName(node.name)
                .setPrivateHost(node.privateHost)
                .setPrivatePort(node.privatePort)
                .setPublicHost(node.publicHost)
                .setPublicPort(node.publicPort)
                .setSftpPort(node.sftpPort)
        )
    }

    async getServers(query?: GetServersQuery) {
        const response = await this.sendRequest<GetServersRequest>('GET', `/api/servers${objectToQueryString(query)}`)

        return response.data.servers.map(server =>
            new PufferServer()
                .setClient(this)
                .setId(server.id)
                .setIp(server.ip)
                .setName(server.name)
                .setNode(new PufferNode()
                    .setClient(this)
                    .setId(server.node.id)
                    .setName(server.node.name)
                    .setPrivateHost(server.node.privateHost)
                    .setPrivatePort(server.node.privatePort)
                    .setPublicHost(server.node.publicHost)
                    .setPublicPort(server.node.publicPort)
                    .setSftpPort(server.node.sftpPort)
                )
                .setNodeId(server.node.id)
                .setPort(server.port)
                .setType(server.type)
                .setUsers(server.users)
        )
    }

    async getServer(id: string) {
        const response = await this.sendRequest<GetServerRequest>('GET', `/api/servers/${id}`)
        const server = response.data.server

        return new PufferServer()
            .setClient(this)
            .setPermissions(response.data.permissions)
            .setId(server.id)
            .setIp(server.ip)
            .setName(server.name)
            .setNode(new PufferNode()
                .setClient(this)
                .setId(server.node.id)
                .setName(server.node.name)
                .setPrivateHost(server.node.privateHost)
                .setPrivatePort(server.node.privatePort)
                .setPublicHost(server.node.publicHost)
                .setPublicPort(server.node.publicPort)
                .setSftpPort(server.node.sftpPort)
            )
            .setNodeId(server.node.id)
            .setPort(server.port)
            .setType(server.type)
            .setUsers(server.users)

    }

    async getNode(id: number) {
        const response = await this.sendRequest<NodeResponse>('GET', `/api/nodes/${id}`)

        return new PufferNode()
            .setClient(this)
            .setId(response.data.id)
            .setName(response.data.name)
            .setPrivateHost(response.data.privateHost)
            .setPrivatePort(response.data.privatePort)
            .setPublicHost(response.data.publicHost)
            .setPublicPort(response.data.publicPort)
            .setSftpPort(response.data.sftpPort)
    }

    async getSelf() {
        const response = await this.sendRequest<SelfUserResponse>('GET', `/api/self`)

        return new PufferUser(response.data.id)
            .setClient(this)
            .setEmail(response.data.email)
            .setUsername(response.data.username)
            .setPassword(response.data.password)
            .setNewPassword(response.data.newPassword)
    }

    async sendRequest<T>(method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH', path: string, data?: any): Promise<AxiosResponse<T>> {
        try {
            return await axios.request<T>({
                method,
                url: `${this.authenticator.endpoint}${path}`,
                data,
                headers: {
                    Authorization: `Bearer ${this.authenticator.getAccessToken()}`
                }
            });
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                const errorCode = error.response.status;
                const errorMessage = `Invalid response.\nStatus Code: ${errorCode}\nResponse Data: ${JSON.stringify(error.response.data, null, 2)}`;
                throw new Error(errorMessage);
            }
            throw error;
        }
    }
}
