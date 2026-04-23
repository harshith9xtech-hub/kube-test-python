FROM nginx:alpine

# remove default content
RUN rm -rf /usr/share/nginx/html/*

# copy frontend
COPY index.html /usr/share/nginx/html/

# fix permissions for nginx user
RUN chmod -R 755 /usr/share/nginx/html

# DO NOT set USER manually
# nginx handles permissions internally

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
