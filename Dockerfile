FROM node:12-alpine

WORKDIR /app

EXPOSE 8000
CMD ["npm", "start"]
