# Description

Sample app showcasing Cognito authentication with a [Nest](https://github.com/nestjs/nest) API.

# Installation

```bash
$ pnpm install
```

## Cognito

Set up Cognito as per https://github.com/Lokicoule/nestjs-cognito/wiki, and update the following values in .env

```
COGNITO_CLIENT_ID
COGNITO_REGION
COGNITO_USER_POOL_ID
```

To generate a token you'll need to use the [Cognito Authorize endpoint](https://docs.aws.amazon.com/cognito/latest/developerguide/authorization-endpoint.html) using your custom domain (configured in the App Integration section of the User Pool):

```
https://${custom_domain}/oauth2/authorize
```

The [Cognito Token endpoint](https://docs.aws.amazon.com/cognito/latest/developerguide/token-endpoint.html) may also be required:

```
https://${custom_domain}.amazoncognito.com/oauth2/token
```

# Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

# Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```
