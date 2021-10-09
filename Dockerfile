# pull the official base image
FROM node:14.15.0-alpine
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
# add app
COPY . ./
EXPOSE 3000
# start app
ENTRYPOINT ["yarn", "start"]