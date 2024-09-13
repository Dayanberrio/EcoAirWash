# Use the official Node.js 20 image as base
FROM node:20 as build

# Set working directory
WORKDIR /usr/src/app

# Copy package files first to leverage Docker caching
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY ./src ./src

# Compile TypeScript to JavaScript
RUN npm run build

# Stage for production to reduce image size
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy only the necessary files for runtime
COPY --from=build /usr/src/app/dist ./dist
COPY package*.json ./

# Install production dependencies only
RUN npm install --only=production

# Expose the port the app will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
