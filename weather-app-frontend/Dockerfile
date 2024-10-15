FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN npm run build

EXPOSE 3000

RUN npm install -g serve
CMD ["serve", "-s", "build"]
