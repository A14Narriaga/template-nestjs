<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<h1 align="center">✨ NestJS Template ✨</h1>

<p align="center">Template based on NestJS and GraphQL</p>

<p align="center">
  <a href="https://nodejs.org/docs/latest-v20.x/api/index.html"><img src="https://img.shields.io/badge/node-20.12-green.svg" alt="node"/></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/typescript-5.x-blue.svg" alt="typescript"/></a>
  <a href="https://docs.nestjs.com/v10/"><img src="https://img.shields.io/badge/npm-10.x-red.svg" alt="npm"/></a>
  <a href="https://fastify.dev/"><img src="https://img.shields.io/badge/Web_Framework-⚡ Fastify-black.svg" alt="fastify"/></a>
  <a href="https://swc.rs/"><img src="https://img.shields.io/badge/Compiler-SWC_-orange.svg" alt="swc"/></a>
  <a href="https://vitest.dev/"><img src="https://img.shields.io/badge/Test-Vitest_-yellow.svg" alt="swc"/></a>
  <a href="https://www.docker.com/"><img src="https://img.shields.io/badge/🐳 Docker_-blue.svg" alt="docker"/></a>
  <a href="https://graphql.org"><img src="https://img.shields.io/badge/GraphQL_-F6009B.svg" alt="docker"/></a>
    <a href="https://typicode.github.io/husky/"><img src="https://img.shields.io/badge/🐶 Husky-1B1B1F.svg" alt="husky"/></a>
</p>

## ⚠️ Envars

| env         | example     | description                  |
| ----------- | ----------- | ---------------------------- |
| NODE_ENV    | development | Current environment          |
| APP_VERSION | 1.0.0       | App version number           |
| PORT        | 8000        | Development port for the app |

## 🧑‍💻 Development

Clone the repository or use the template directly:

```bash
git clone https://github.com/A14Narriaga/template-nestjs
```

Copy the environment variables from the example file:

```bash
cp .env.example .env
```

If the node_modules directory not already exist, create it

```bash
mkdir node_modules
```

If you want to run the application in development mode:
Note: Remeber execute all the commands for the repo directly form docker terminal.

```bash
docker compose up dev -d
```

If you want to enter to the integrated terminal

```bash
docker exec -it dev sh
```

If you need to stop the development service, execute:

```bash
docker compose down
```

## 🧪 Testing

To run the all the test with coverage run:

```bash
yarn:test
```

Or with watch mode enabled:

```bash
yarn test:dev
```

If you are interested only in the unit tests, you can run:

```bash
yarn test:unit
```

or with watch mode enabled:

```bash
yarn test:dev:unit
```

Or if you want end-to-end tests, you can execute:

```bash
yarn test:e2e
```

or with watch mode enabled:

```bash
yarn test:dev:e2e
```

## 🚀 Production

```bash
docker compose up prod -d
```

## ⚙️ Building

```bash
yarn build
```

## 💅 Formatter

To run Prettier, you can execute:

```bash
yarn format
```

And to try to fix format issues automatically, you can run:

```bash
yarn format:fix
```

## 💅 Linting

To run lint, you can execute:

```bash
yarn lint
```

And to try to fix lint issues automatically, you can run:

```bash
yarn lint:fix
```
