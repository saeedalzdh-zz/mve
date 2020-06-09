FROM node:12-alpine

# Env
ENV NODE_ENV development
ENV SERVER_PORT 8000
ENV API_VERSION v1

# Create Directory for the Container
WORKDIR /usr/src/app

# Only copy the package.json file to work directory
COPY package.json .

# Install all Packages
RUN npm install

# Copy all other source code to work directory
ADD . /usr/src/app

# build app
RUN npm run build

# Start
CMD [ "npm", "start" ]
EXPOSE 7001