import {PufferClient} from "./classes/PufferClient";
import {PufferAuthenticatorBuilder} from "./classes/AuthenticatorBuilder";

const clientId = '';
const clientSecret = '';

const test = async () => {
    const authenticator = new PufferAuthenticatorBuilder()
        .withDomain('xxx.com')
        .withClientId(clientId)
        .withClientSecret(clientSecret)
        .withSsl(true)

    await authenticator.build();

    const client = new PufferClient(authenticator);

    // Example: Get server by id
    // Explore the project to know all its capabilities
    const server = await client.getServer('xxxxxxxx')
    // Do something with server...
}
test()