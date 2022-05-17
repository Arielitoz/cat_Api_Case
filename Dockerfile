FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY  . .

EXPOSE 4004

CMD ["npm", "start"]