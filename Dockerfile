#Base image file
FROM node:alpine

#App Directory inside image
WORKDIR /usr/src/izycast

#Copy package.json and package-lock.json files to the app
COPY package*.json ./

RUN npm install
#Install dependencies-- clean install is recommended in automated installations
RUN npm ci

#copy files and folders to image
COPY . .

#start command
CMD [ "node","index.js" ]

