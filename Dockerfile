FROM node:20-slim AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .

FROM node:20-slim
WORKDIR /app
COPY --from=builder /app /app
ENV NODE_ENV docker
EXPOSE 3000
CMD ["yarn", "start"]
