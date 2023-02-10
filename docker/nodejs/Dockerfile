FROM node:lts-alpine
WORKDIR /app
ENV DOCKERIZE_VERSION v0.6.1
RUN npm init -y && \
    npm install express --save && \
    npm install mysql --save && \
    apk add --no-cache openssl && \
    wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz
EXPOSE 3000
COPY . .

CMD ["node", "index.js"]