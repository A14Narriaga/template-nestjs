FROM --platform=$BUILDPLATFORM node:20.12.0-alpine3.19 AS base
ENV DIR /app
WORKDIR $DIR

# Development Mode
FROM base AS development
EXPOSE ${PORT}
COPY package.json package.json
RUN npm i -g @nestjs/cli
RUN yarn install
CMD [ "yarn", "dev" ]

# Install development dependencies
FROM base AS dev-deps
COPY package.json package.json
RUN yarn install --frozen-lockfile

# Build the app
FROM base AS builder
COPY --from=dev-deps $DIR/node_modules ./node_modules
COPY . .
RUN yarn type-check && yarn test && yarn build

# Install production dependencies
FROM base AS prod-deps
COPY package.json package.json
RUN yarn install --prod --frozen-lockfile

# Production app
FROM base AS production
EXPOSE ${PORT}
COPY --from=prod-deps $DIR/node_modules ./node_modules
COPY --from=builder $DIR/dist ./dist
COPY package.json package.json
CMD [ "yarn", "start" ]

