server {
listen 80;
server_name otium.dev www.otium.dev;
return 301 https://otium.dev$request_uri;
}

server {
listen 443 ssl;
server_name otium.dev www.otium.dev;

    ssl_certificate /etc/letsencrypt/live/otium.dev/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/otium.dev/privkey.pem;

    location / {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X- Real - IP $remote_addr;
        add_header 'Access-Control-Allow-Origin' '*';
        add_header 'Access-Control-Allow-Methods' 'GET, POST';
        add_header 'Access-Control-Allow-Headers' 'DNT,X-CustomHeader, Keep-Alive,User-AgentX-Requested-With If-Modified-Since,Cache-Control,Content-Type';
        add_header 'Access-Control-Allow-Credentials' 'true';
    }

    location /weather {
        proxy_pass http://localhost:5000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    error_log /var/log/nginx/otium.dev.error;
    access_log /var/log/nginx/otium.dev.access;

}
