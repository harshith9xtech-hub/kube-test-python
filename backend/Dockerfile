FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies (THIS is your npm install step)
RUN npm install

# Copy source code
COPY . .

# Expose backend port
EXPOSE 3000

# Start app
CMD ["node", "server.js"]
