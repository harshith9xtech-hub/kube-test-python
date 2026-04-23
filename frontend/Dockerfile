FROM nginx:alpine

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy frontend files
COPY index.html /usr/share/nginx/html/

# Fix permissions
RUN chown -R appuser:appgroup /usr/share/nginx/html

# Run nginx as non-root
USER appuser

EXPOSE 80
