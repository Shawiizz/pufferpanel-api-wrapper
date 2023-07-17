import axios from "axios";

export class PufferAuthenticatorBuilder {
    private clientId!: string;
    private clientSecret!: string;
    private domain?: string;
    private ip?: string;
    private port: number = 8080;
    private ssl: boolean = true;
    private accessToken: string | null = null;

    public get endpoint() {
        if (this.ip && this.domain)
            throw new Error('You can\'t use both ip and domain');

        if (this.ip)
            return `${this.ssl ? 'https' : 'http'}://${this.ip}:${this.port}`;

        return `${this.ssl ? 'https' : 'http'}://${this.domain}`;
    }

    withClientId(clientId: string) {
        this.clientId = clientId;
        return this;
    }

    withClientSecret(clientSecret: string) {
        this.clientSecret = clientSecret;
        return this;
    }

    withDomain(domain: string) {
        this.domain = domain;
        return this;
    }

    withIp(ip: string) {
        this.ip = ip;
        return this;
    }

    withPort(port: number) {
        this.port = port;
        return this;
    }

    withSsl(ssl: boolean) {
        this.ssl = ssl;
        return this;
    }

    getAccessToken() {
        return this.accessToken;
    }

    async getToken() {
        try {
            const response = await axios.post(
                `${this.endpoint}/oauth2/token`,
                {
                    grant_type: 'client_credentials',
                    client_id: this.clientId,
                    client_secret: this.clientSecret
                },
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    }
                }
            );

            console.log(response.data);

            if (response.data?.expires_in) {
                setTimeout(() => {
                    console.log('Token has expired, fetching new one')
                    this.accessToken = null;
                    this.getToken();
                }, response.data.expires_in * 1000);
            }

            this.accessToken = response.data.access_token;

            if(!this.accessToken)
                console.error('Failed to authenticate, check your credentials');
        } catch (error) {
            console.log('Error :', error);
            throw new Error('Failed to authenticate, check your credentials');
        }
    }

    async build() {
        if (!this.accessToken)
            await this.getToken();

        return this
    }
}
