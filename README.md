# regarde-ou-tu-marches

Ce projet est un monorepo JS, suivant l'architecture React-Express-MySQL telle qu'enseignée à la Wild Code School (v7.1.7).
Il a été réalisé en deux jours pour le checkpoint 4 de la formation.

# Introduction
"Regarde où tu marches" est une application interactive qui invite les utilisateurs à capturer et partager des cartes à jouer trouvées dans l’espace public. Le but ? Rassembler un jeu de 52 cartes dispersé à travers le monde, tout en racontant les histoires qui les entourent.

Cette application est développée avec React pour le frontend et Node.js avec Express pour le backend. Elle utilise TypeScript pour une meilleure gestion des types et Multer pour la gestion des fichiers envoyés par les utilisateurs.

# Mes Documents
- Wireframes :/client/src/assets/wireframes
- Modèle de données : client/src/assets/modèle_données
- Design : client/src/assets/design
- User stories : client/src/assets/user_stories

# Technologies utilisées
- Frontend :
React avec Vite ⚛️
TypeScript 🏗
Swiper (carrousel d’images) 📷
CSS Modules 🎨
- Backend :
Node.js 🌿
Express 🚀
TypeScript 🏗
Multer (upload d'images) 🖼
MySQL pour la base de données 🗄

# Installation et exécution
- Pré-requis
Node.js >= 18.x
NPM ou Yarn
MySQL ou PostgreSQL (avec une base de données configurée)

- Clonage du projet
git clone git@github.com:Ccilpy/regarde-ou-tu-marches.git
cd regarde-ou-tu-marches

- Installation des dépendances
📂 Backend (Server)
cd server
npm install
📂 Frontend (Client)
cd ../client
npm install

- Configuration
Avant de démarrer, copie le fichier .env.sample et renomme-le en .env côté client et côté server.
Puis renseigne tes variables d’environnement.

- Lancer l’application
npm run dev

# API - Documentation
📌 Endpoints disponibles
GET	/api/cards	=> Récupère toutes les cartes
GET	/api/cards/:id	=> Récupère une carte spécifique
POST	/api/cards	=> Ajoute une nouvelle carte
PUT	/api/cards/:id	=> Modifie une carte existante
DELETE	/api/cards/:id	=> Supprime une carte
POST	/api/cards/upload	=> Upload d’image (Multer)