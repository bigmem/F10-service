FROM node:11.8.0
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --registry=https://registry.npm.taobao.org --production --silent && mv node_modules ../
COPY ./dist .
EXPOSE 3000
CMD node bin/www
