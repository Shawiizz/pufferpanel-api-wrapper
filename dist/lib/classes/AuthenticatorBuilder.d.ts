export declare class PufferAuthenticatorBuilder {
    private clientId;
    private clientSecret;
    private domain?;
    private ip?;
    private port;
    private ssl;
    private accessToken;
    get endpoint(): string;
    withClientId(clientId: string): this;
    withClientSecret(clientSecret: string): this;
    withDomain(domain: string): this;
    withIp(ip: string): this;
    withPort(port: number): this;
    withSsl(ssl: boolean): this;
    getAccessToken(): string | null;
    getToken(): Promise<void>;
    build(): Promise<this>;
}
