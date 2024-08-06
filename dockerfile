FROM nginx:alpine

COPY . /usr/share/nginx/html

EXPOSE 80

# Commande par défaut pour lancer nginx
CMD ["nginx", "-g", "daemon off;"]

# sudo docker build -t calculateur-imc .
# sudo docker run -d -p 8080:80 calculateur-imc
# http://localhost:8080