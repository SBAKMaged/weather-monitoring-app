FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 5000

ENV NODE_ENV=production

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

CMD ["node", "index.js"]
