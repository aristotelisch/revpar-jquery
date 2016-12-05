FROM zzrot/alpine-caddy  
COPY Caddyfile /etc/Caddyfile  
COPY ./static /var/www/html  

