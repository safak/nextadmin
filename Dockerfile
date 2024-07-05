FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG ENV_FILE=.env.production
COPY ${ENV_FILE} .env

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]