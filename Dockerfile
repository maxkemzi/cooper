FROM node:20-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /client
COPY /client/package.json /client/package-lock.json ./
RUN npm ci

WORKDIR /server
COPY /server/package.json /server/package-lock.json ./
RUN npm ci

FROM base AS builder

WORKDIR /client
COPY --from=deps /client/node_modules ./node_modules
COPY client ./

RUN npm run build

WORKDIR /server
COPY --from=deps /server/node_modules ./node_modules
COPY server ./

RUN npm run build

FROM base as runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /client/build ./static
COPY --from=builder /server/node_modules ./node_modules
COPY --from=builder /server/dist ./

EXPOSE 3000
ENV PORT=3000
CMD ["node", "./src/index.js"]
