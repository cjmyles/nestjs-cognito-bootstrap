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
