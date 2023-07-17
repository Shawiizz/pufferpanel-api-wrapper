import {OAuth2Client} from "./OAuth2Client";
import {PufferClient} from "./PufferClient";
import {OAuth2ClientCreateResponse, OAuth2ClientResponse} from "../interfaces/PufferInterfaces";

export class PufferUser {
    private readonly id: number;
    private client!: PufferClient;

    private email!: string;
    private username!: string;
    private password!: string;
    private newPassword!: string;
    private otpActive!: boolean;

    constructor(id: number) {
        this.id = id;
    }

    setClient(client: PufferClient) {
        this.client = client;
        return this;
    }

    getClient() {
        return this.client;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email: string) {
        this.email = email;
        return this;
    }

    getUsername() {
        return this.username;
    }

    setUsername(username: string) {
        this.username = username;
        return this;
    }

    getPassword() {
        return this.password;
    }

    setPassword(password: string) {
        this.password = password;
        return this;
    }

    getNewPassword() {
        return this.newPassword;
    }

    setNewPassword(newPassword: string) {
        this.newPassword = newPassword;
        return this;
    }

    getOtpActive() {
        return this.otpActive;
    }

    setOtpActive(otpActive: boolean) {
        this.otpActive = otpActive;
        return this;
    }

    async update() {
        return this.client.sendRequest('PUT', `/api/users/${this.getId()}`, {
            otpActive: this.getOtpActive() // TODO: test
        })
    }

    async getOAuth2Clients() {
        const response = await this.client.sendRequest<OAuth2ClientResponse[]>('GET', `/api/self/oauth2`)

        return response.data.map(client => new OAuth2Client()
            .setClient(this.getClient())
            .setId(client.client_id)
            .setName(client.name)
            .setDescription(client.description)
        );
    }

    async createOAuth2Client(name: string, description: string = '') {
        const response = await this.client.sendRequest<OAuth2ClientCreateResponse>('POST', `/api/self/oauth2`, {
            name,
            description,
        })

        return new OAuth2Client()
            .setClient(this.getClient())
            .setId(response.data.id)
            .setName(name)
            .setDescription(description)
            .setSecret(response.data.secret)
    }

    deleteOAuth2Client(client: OAuth2Client) {
        return this.client.sendRequest('DELETE', `/api/self/oauth2/${client.getId()}`)
    }
}