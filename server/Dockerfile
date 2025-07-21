FROM node:18-alpine

WORKDIR /app

# Copy backend package files and install dependencies
COPY package*.json ./

RUN npm install

# Copy the entire backend source code
COPY . .

EXPOSE 5000

# Use npm start to run server.js (make sure your package.json has a start script)
CMD ["npm", "start"]
