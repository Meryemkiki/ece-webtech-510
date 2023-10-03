const http = require('http');
const url = require('url');
const fs = require('fs');

const serverHandle = function (req, res) {
  const route = url.parse(req.url);
  const path = route.pathname;

  if (path === '/') {
    // Route pour la page d'accueil (comme dans la partie 5)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bienvenue sur la page d\'accueil!');
  } else if (path === '/hello') {
    // Route pour la page /hello (comme dans la partie 5)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, webtech-510');
  } else if (path === '/about') {
    // Nouvelle route pour la page /about
    const filePath = './content/about.json';

    // Lire le fichier JSON de manière asynchrone
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Erreur interne du serveur');
        return;
      }

      // Parse le contenu JSON
      const jsonData = JSON.parse(data);

      // Répond avec le contenu JSON
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(jsonData, null, 2));
    });
  } else {
    // Gestion de page non trouvée (comme dans la partie 5)
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page non trouvée');
  }
};

http.createServer(serverHandle).listen(8080);
