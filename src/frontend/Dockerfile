# Image de base Nginx
FROM nginx:latest

# Installer curl pour récupérer l'IP publique
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Copier tous les fichiers du frontend dans Nginx
COPY . /usr/share/nginx/html

# Copier le script entrypoint
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Exposer le port 80
EXPOSE 80

# Utiliser le script entrypoint pour démarrer Nginx et remplacer l'IP
#ENTRYPOINT ["/entrypoint.sh"]

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
