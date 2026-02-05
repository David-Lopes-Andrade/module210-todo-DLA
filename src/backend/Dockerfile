<<<<<<< HEAD
# Utiliser Node.js comme image de base
FROM node:16

# Définir le répertoire de travail à l'intérieur du conteneur
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances Node.js
RUN npm install

# Copier tout le code du backend dans le conteneur
COPY . .

# Exposer le port utilisé par le backend
EXPOSE 8080

# Lancer le backend
CMD ["npm", "start"]
=======
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
>>>>>>> ae2816857feaedb3999cb0372392191bb2848833
