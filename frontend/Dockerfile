FROM node:16-alpine

RUN mkdir -p /home/node/app
WORKDIR /usr/app
COPY --chown=node package.json ./

RUN yarn

COPY --chown=node ./ .

RUN yarn build

COPY . .

RUN rm -rf src
CMD ["build", "-p", "3002"]