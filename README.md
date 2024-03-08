# Liens du Memory Game Host

[Memory Game](https://memorygamenanash.web.app/).

# Commencer avec Create React App

Ce projet a été initialisé avec [Create React App](https://github.com/facebook/create-react-app).

## Scripts Disponibles

Dans le répertoire du projet, vous pouvez exécuter :

### `npm start`

Lance l'application en mode développement.\
Ouvrez [http://localhost:3000](http://localhost:3000) pour le visualiser dans votre navigateur.

La page se rechargera lorsque vous ferez des modifications.\
Vous pouvez également voir les erreurs de lint dans la console.

### `npm test`

Lance le test runner en mode watch interactif.\
Voir la section sur [l'exécution des tests](https://facebook.github.io/create-react-app/docs/running-tests) pour plus d'informations.

### `npm run build`

Construit l'application pour la production dans le dossier `build`.

## Le Jeu

Le jeu est un Memory Game. Le but du jeu est de trouver toutes les paires de cartes correspondantes.

Au début du jeu, toutes les cartes sont mélangées et placées face cachée sur le plateau. Le joueur doit cliquer sur deux cartes pour les retourner. Si les deux cartes sont identiques, elles restent face visible. Si elles ne sont pas identiques, elles sont retournées face cachée.

Le joueur doit se souvenir de l'emplacement des cartes pour pouvoir faire correspondre les paires plus facilement. Le jeu continue jusqu'à ce que toutes les paires de cartes aient été trouvées.

Le but est de trouver toutes les paires avec le moins de tentatives possible.