FROM node:16.15.0-alpine
WORKDIR /app
# using cache to increase performance
ADD package*.json ./
ADD . .
# for development only
RUN npm install
CMD node index.js
