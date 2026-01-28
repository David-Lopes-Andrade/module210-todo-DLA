#!/bin/bash
set -e

# 1. Récupérer l'adresse IP publique de la machine
PUBLIC_IP=$(curl -s https://api64.ipify.org)

# 2. Modifier app.js pour remplacer l'ancienne IP par la nouvelle
# Ici on suppose que dans app.js tu as une ligne avec const apiEndpoint = "http://x.x.x.x:8080/api/tasks";
# On remplace dynamiquement l'IP
sed -i "s|http://[0-9\.]\+:8080/api/tasks|http://$PUBLIC_IP:8080/api/tasks|g" /usr/share/nginx/html/app.js

# 3. Lancer nginx en foreground
nginx -g 'daemon off;'
