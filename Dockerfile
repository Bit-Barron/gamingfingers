# Base image for building the application
FROM node:22-alpine3.19 AS base

# Install curl and bash
RUN apk update && apk add curl bash

# Install pnpm
RUN curl -L https://unpkg.com/@pnpm/self-installer | node

# Stage to install dependencies
FROM base AS dependencies
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Stage to build the application
FROM base AS build
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN pnpm run build

# Final stage to create the production image
FROM node:22-alpine3.19 AS production
WORKDIR /app
COPY --from=build /app/package.json .
COPY --from=build /app/pnpm-lock.yaml .
COPY --from=build /app/next.config.js ./
COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
EXPOSE 3000
ENV NODE_ENV=production
CMD [ "node", "server.js" ]
