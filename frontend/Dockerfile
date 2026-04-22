FROM nginx:alpine

# remove default nginx page
RUN rm -rf /usr/share/nginx/html/*

# copy frontend files
COPY index.html /usr/share/nginx/html/index.html

EXPOSE 80
