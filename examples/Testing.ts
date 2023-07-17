import {PufferAuthenticatorBuilder} from "../lib/classes/AuthenticatorBuilder";
import {PufferClient} from "../lib/classes/PufferClient";

const clientId = '';
const clientSecret = '';

const test = async () => {
    const authenticator = new PufferAuthenticatorBuilder()
        .withDomain('yourdomain.com')
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