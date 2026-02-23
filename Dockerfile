# ---------- Stage 1 ----------
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

# Use CI instead of install
RUN npm ci --legacy-peer-deps

COPY . .

RUN npm run build


# ---------- Stage 2 ----------
FROM node:22-alpine

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]