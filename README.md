<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<h1 align="center">✨ NestJS Template ✨</h1>

<p align="center">Template based on NestJS and GraphQL</p>

<p align="center">
  <a href="https://nodejs.org/docs/latest-v20.x/api/index.html"><img src="https://img.shields.io/badge/node-20.12-green.svg" alt="node"/></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/typescript-5.x-blue.svg" alt="typescript"/></a>
  <a href="https://docs.nestjs.com/v10/"><img src="https://img.shields.io/badge/npm-10.x-red.svg" alt="npm"/></a>
  <a href="https://fastify.dev/"><img src="https://img.shields.io/badge/Web_Framework-Fastify_⚡-black.svg" alt="fastify"/></a>
  <a href="https://swc.rs/"><img src="https://img.shields.io/badge/Compiler-SWC_-orange.svg" alt="swc"/></a>
  <a href="https://vitest.dev/"><img src="https://img.shields.io/badge/Test-Vitest_-yellow.svg" alt="swc"/></a>
  <a href="https://www.docker.com/"><img src="https://img.shields.io/badge/Dockerized 🐳_-blue.svg" alt="docker"/></a>
  <a href="https://graphql.org"><img src="https://img.shields.io/badge/GraphQL_-F6009B.svg" alt="docker"/></a>
</p>

## Steps

1. Clonar proyecto
2. `yarn install`
3. Copiar las variables de entorno y modificarlas `cp .env.example .env`
4. Levantar el proyecto con `docker compose up`

## Envs

| env         | example | description           |
| ----------- | ------- | --------------------- |
| NODE_ENV    | 1.0.0   | Current enviroment    |
| APP_VERSION | 1.0.0   | Number of app version |
| APP_PORT    | 8000    | App port for dev      |

## 🧑‍💻 Developing

First, we will need to create our .env file, we can create a copy from the example one:

```bash
cp .env.example .env
```

The project is fully dockerized 🐳, if we want to start the app in **development mode**, we just need to run:

```bash
docker-compose up
```

If you want to stop developing, you can stop the service running:

```bash
docker-compose down
```

## ⚙️ Building

```bash
npm run build
```

## 🧪 Testing

To run all tests you can run:

```bash
npm run test
```

If you are interested just in the unit tests, you can run:

```bash
npm run test:unit
```

Or if you want e2e tests, you can execute:

```bash
npm run test:e2e
```

## 💅 Linting

To run the linter you can execute:

```bash
npm run lint
```

And for trying to fix lint issues automatically, you can run:

```bash
npm run lint:fix
```
