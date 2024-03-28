# development app
FROM --platform=$BUILDPLATFORM node:20.12.0-alpine3.19 AS dev
EXPOSE ${APP_PORT}
WORKDIR /app
COPY package.json package.json
RUN yarn install
CMD [ "yarn", "start:dev" ]

# Install development dependencies
FROM --platform=$BUILDPLATFORM node:20.12.0-alpine3.19 AS dev-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --frozen-lockfile

# Build the app
FROM --platform=$BUILDPLATFORM node:20.12.0-alpine3.19 AS builder
WORKDIR /app
COPY --from=dev-deps app/node_modules ./node_modules
COPY . .
RUN yarn format && yarn lint && yarn type-check && yarn test && yarn build

# Install production dependencies
FROM --platform=$BUILDPLATFORM node:20.12.0-alpine3.19 AS prod-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --prod --frozen-lockfile

# Production app
FROM --platform=$BUILDPLATFORM node:20.12.0-alpine3.19 AS prod
EXPOSE ${APP_PORT}
ENV APP_VERSION=${APP_VERSION}
WORKDIR /app
COPY --from=prod-deps app/node_modules ./node_modules
COPY --from=builder app/dist ./dist
CMD [ "node", "dist/index" ]

