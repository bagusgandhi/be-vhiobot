FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

RUN npm install pm2 -g

COPY . .

EXPOSE 8080
CMD ["pm2-runtime", "server.js"]