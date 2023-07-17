import {OAuth2Client} from "./OAuth2Client";
import {PufferClient} from "./PufferClient";

export declare class PufferUser {
    private readonly id;
    private client;
    private email;
    private username;
    private password;
    private newPassword;
    private otpActive;
    constructor(id: number);
    setClient(client: PufferClient): this;
    getClient(): PufferClient;
    getId(): number;
    getEmail(): string;
    setEmail(email: string): this;
    getUsername(): string;
    setUsername(username: string): this;
    getPassword(): string;
    setPassword(password: string): this;
    getNewPassword(): string;
    setNewPassword(newPassword: string): this;
    getOtpActive(): boolean;
    setOtpActive(otpActive: boolean): this;
    update(): Promise<import("axios").AxiosResponse<unknown, any>>;
    getOAuth2Clients(): Promise<OAuth2Client[]>;
    createOAuth2Client(name: string, description?: string): Promise<OAuth2Client>;
    deleteOAuth2Client(client: OAuth2Client): Promise<import("axios").AxiosResponse<unknown, any>>;
}
