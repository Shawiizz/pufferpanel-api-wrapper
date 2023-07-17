import {PufferClient} from "./PufferClient";
import {PufferNode} from "./PufferNode";
import {OAuth2Client} from "./OAuth2Client";
import {
    OAuth2ClientCreateResponse,
    OAuth2ClientResponse,
    PufferPermissions,
    PufferServerUserPermissions
} from "../interfaces/PufferInterfaces";

export interface ServerStats {
    cpu: number;
    memory: number;
}

export interface ServerStatus {
    running: boolean;
}

export class PufferServer {
    private client!: PufferClient;

    private id!: string;
    private data!: any;
    private ip!: string;
    private name!: string;
    private node!: PufferNode;
    private nodeId!: number;
    private port!: number;
    private type!: string;
    private users!: {
        scopes: string[];
        username: string;
    }[]
    private permissions!: PufferPermissions | null;

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

    getData() {
        return this.data;
    }

    setData(data: any) {
        this.data = data;
        return this;
    }

    getIp() {
        return this.ip;
    }

    setIp(ip: string) {
        this.ip = ip;
        return this;
    }

    getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
        return this;
    }

    getNode() {
        return this.node;
    }

    setNode(node: PufferNode) {
        this.node = node;
        return this;
    }

    getNodeId() {
        return this.nodeId;
    }

    setNodeId(nodeId: number) {
        this.nodeId = nodeId;
        return this;
    }

    getPort() {
        return this.port;
    }

    setPort(port: number) {
        this.port = port;
        return this;
    }

    getType() {
        return this.type;
    }

    setType(type: string) {
        this.type = type;
        return this;
    }

    getUsers() {
        return this.users;
    }

    setUsers(users: {
                 scopes: string[];
                 username: string;
             }[]
    ) {
        this.users = users;
        return this;
    }

    getPermissions() {
        return this.permissions;
    }

    setPermissions(permissions: PufferPermissions | null) {
        this.permissions = permissions;
        return this;
    }

    async start() {
        await this.client.sendRequest('POST', `/daemon/server/${this.getId()}/start`)
    }

    async stop() {
        await this.client.sendRequest('POST', `/daemon/server/${this.getId()}/stop`)
    }

    async reload() {
        await this.client.sendRequest('POST', `/daemon/server/${this.getId()}/reload`)
    }

    async install() {
        await this.client.sendRequest('POST', `/daemon/server/${this.getId()}/install`)
    }

    async kill() {
        await this.client.sendRequest('POST', `/daemon/server/${this.getId()}/kill`)
    }

    async getStats() {
        const response = await this.client.sendRequest<ServerStats>('GET', `/daemon/server/${this.getId()}/stats`)
        return response.data;
    }

    async getStatus() {
        const response = await this.client.sendRequest<ServerStatus>('GET', `/daemon/server/${this.getId()}/status`)
        return response.data;
    }

    delete() {
        return this.client.sendRequest('DELETE', `/api/servers/${this.getId()}`)
    }

    async rename(name: string) {
        await this.client.sendRequest('PUT', `/api/servers/${this.getId()}/name/${name}`)
        this.name = name;
    }

    async getOAuth2Clients() {
        const response = await this.client.sendRequest<OAuth2ClientResponse[]>('GET', `/api/servers/${this.getId()}/oauth2`)

        return response.data.map(client => {
            return new OAuth2Client()
                .setClient(this.getClient())
                .setId(client.client_id)
                .setName(client.name)
                .setDescription(client.description)
        })
    }

    async createOAuth2Client(name: string, description: string = '') {
        const response = await this.client.sendRequest<OAuth2ClientCreateResponse>('POST', `/api/servers/${this.getId()}/oauth2`, {
            name,
            description
        })

        return new OAuth2Client()
            .setClient(this.getClient())
            .setId(response.data.id)
            .setName(name)
            .setDescription(description)
            .setSecret(response.data.secret)
    }

    deleteOAuth2Client(client: OAuth2Client) {
        return this.client.sendRequest('DELETE', `/api/servers/${this.getId()}/oauth2/${client.getId()}`)
    }

    async getUsersWithPermissions() {
        const request = await this.client.sendRequest<GetUsersWithPermissionsRequest[]>('GET', `/api/servers/${this.getId()}/user`)

        return request.data.map(user => {
            const { username, email, serverIdentifier, ...permissions } = user;
            return {
                username,
                email,
                serverIdentifier,
                permissions,
            };
        });
    }

    async setUserPermissions(email: string, permissions: Partial<PufferServerUserPermissions>) {
        const usersWithPerms = await this.getUsersWithPermissions()
        const user = usersWithPerms.find(user => user.email === email)
        if(!user) throw new Error('User not found, cannot set permissions.')

        return this.client.sendRequest('PUT', `/api/servers/${this.getId()}/user/${email}`, {
            ...user.permissions,
            ...permissions,
        })
    }

    deleteUser(email: string) {
        return this.client.sendRequest('DELETE', `/api/servers/${this.getId()}/user/${email}`)
    }
}

interface GetUsersWithPermissionsRequest extends PufferPermissions {
    username: string;
    email: string;
    serverIdentifier: string;
}