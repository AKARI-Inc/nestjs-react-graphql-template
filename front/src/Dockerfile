# 開発環境
FROM node:16.15.0-alpine as development
WORKDIR /front
COPY . .

# ビルド環境
FROM node:16.15.0-alpine AS builder
WORKDIR /front
COPY package*.json ./
RUN npm install
COPY . .
## set environment variables before react build
ENV NODE_OPTIONS "--max-old-space-size=2048"
## react build
RUN npm run build

# デプロイ環境
FROM nginx:1.21-alpine AS deploy
WORKDIR /front
COPY --from=builder /front/build /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
