FROM node:18.18.2-slim
ENV CI=true

RUN mkdir -p /home/app/node_modules

WORKDIR /home/app

COPY package*.json ./

RUN apt-get update -y && apt-get install -y openssl


RUN npm install

COPY  . .

EXPOSE 3000

CMD [ "npm", "run" , "start:dev"]