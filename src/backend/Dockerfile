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
