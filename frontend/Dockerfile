FROM nginx:alpine

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

RUN rm -rf /usr/share/nginx/html/*
COPY index.html /usr/share/nginx/html/

RUN chown -R appuser:appgroup /usr/share/nginx/html

# allow nginx to run with correct permissions
RUN sed -i 's/user  nginx;/user  appuser;/g' /etc/nginx/nginx.conf

EXPOSE 80
