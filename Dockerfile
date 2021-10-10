# pull the official base image
FROM node:14.15.0-alpine
# set working direction
RUN apk update && apk add bash
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
ARG WEATHER_API_KEY
RUN echo "REACT_APP_WEATHER_API_KEY=${WEATHER_API_KEY}" > .env
# add app
COPY . ./
EXPOSE 3000
# start app
ENTRYPOINT ["yarn", "start"]