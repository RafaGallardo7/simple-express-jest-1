# FROM node
# WORKDIR /usr/src/app
# COPY package*.json ./
# RUN npm install
# COPY . .
# EXPOSE 3000
# CMD ["node", "app.js"]

FROM node:latest
WORKDIR app
COPY . .
RUN npm install && npm test
EXPOSE 3000
CMD ["node","server.js"]