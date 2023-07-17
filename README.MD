<div align="center">
  <h1 align="center">PufferPanel Wrapper</h1>

### PufferPanel OAuth2 Wrapper for NodeJS (WIP)
![NodeJS](https://img.shields.io/badge/node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Typescript](https://img.shields.io/badge/typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Github stars](https://img.shields.io/github/stars/Shawiizz/pufferpanel-api-wrapper?style=for-the-badge)
![License](https://img.shields.io/github/license/Shawiizz/pufferpanel-api-wrapper?style=for-the-badge)
</div>

## About

This is a wrapper for the PufferPanel API allowing you to easily interact with the API of your self-hosted panel.
It is written in Typescript and is fully typed.     
It's a WIP project, so there are still some endpoints missing, and my code isn't perfect. Any contribution is welcome!     
<strong>If you have any questions, feel free to open an issue.</strong>

*Note: This wrapper is not affiliated with PufferPanel.*

## Getting started
<b>This project isn't converted to a NPM installable module yet, so you'll have to use it manually.</b>

First, clone the repository and install the dependencies:
```bash
git clone https://github.com/Shawiizz/pufferpanel-api-wrapper.git
cd pufferpanel-api-wrapper
npm install
```

## Example

### How to login
```typescript
const authenticator = new PufferAuthenticatorBuilder()
        .withDomain('yourdomain.com')
        .withClientId(clientId)
        .withClientSecret(clientSecret)
        .withSsl(true)

await authenticator.build();

const client = new PufferClient(authenticator); // Use client to interact with the API
```

### How to get a server
```typescript
const server = await client.getServer('serverId');
```

To see more, check out classes in the `src/classes` folder.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.  
All missing functions (routes) are in the [GitHub issues](https://github.com/Shawiizz/pufferpanel-api-wrapper/issues) of this repository. If you want to contribute, you can take one of them and make a pull request.

## License

This project is licensed under the GPLv3 License - see the [LICENSE](LICENSE) file for details.