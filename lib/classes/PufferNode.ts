import {PufferClient} from "./PufferClient";
import {DeploymentData} from "../interfaces/PufferInterfaces";

export class PufferNode {
    private client!: PufferClient;

    private id!: number;
    private name!: string;
    private privateHost!: string;
    private privatePort!: number;
    private publicHost!: string;
    private publicPort!: number;
    private sftpPort!: number;

    setClient(client: PufferClient) {
        this.client = client;
        return this;
    }

    getClient() {
        return this.client;
    }

    setId(id: number) {
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

    getPrivateHost() {
        return this.privateHost;
    }

    setPrivateHost(privateHost: string) {
        this.privateHost = privateHost;
        return this;
    }

    getPrivatePort() {
        return this.privatePort;
    }

    setPrivatePort(privatePort: number) {
        this.privatePort = privatePort;
        return this;
    }

    getPublicHost() {
        return this.publicHost;
    }

    setPublicHost(publicHost: string) {
        this.publicHost = publicHost;
        return this;
    }

    getPublicPort() {
        return this.publicPort;
    }

    setPublicPort(publicPort: number) {
        this.publicPort = publicPort;
        return this;
    }

    getSftpPort() {
        return this.sftpPort;
    }

    setSftpPort(sftpPort: number) {
        this.sftpPort = sftpPort;
        return this;
    }

    async create() {
        return await this.client.sendRequest('POST', `/api/nodes`, {
            name: this.getName(),
            privateHost: this.getPrivateHost(),
            privatePort: this.getPrivatePort(),
            publicHost: this.getPublicHost(),
            publicPort: this.getPublicPort(),
            sftpPort: this.getSftpPort()
        })
    }

    async delete() {
        return this.client.sendRequest('DELETE', `/api/nodes/${this.getId()}`)
    }

    async update() {
        return this.client.sendRequest('PUT', `/api/nodes/${this.getId()}`, {
            id: this.getId(),
            name: this.getName(),
            privateHost: this.getPrivateHost(),
            privatePort: this.getPrivatePort(),
            publicHost: this.getPublicHost(),
            publicPort: this.getPublicPort(),
            sftpPort: this.getSftpPort()
        })
    }

    async getDeploymentData() {
        const response = await this.client.sendRequest<DeploymentData>('GET', `/api/nodes/${this.getId()}/deployment`)
        return response.data;
    }
}