FROM node:18-alpine

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY app.js ./

RUN chown -R appuser:appgroup /app

USER appuser

EXPOSE 3000

CMD ["node", "app.js"]
