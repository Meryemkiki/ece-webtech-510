/*const http = require('http');
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

http.createServer(serverHandle).listen(8080);*/
const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 8080;

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.send('Bienvenue sur la page d\'accueil!');
});

// Route pour la page /hello
app.get('/hello', (req, res) => {
  res.send('Hello, webtech-510');
});

// Route pour la page /about
app.get('/about', (req, res) => {
  const filePath = './content/about.json';

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Erreur interne du serveur');
      return;
    }

    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
});

// Gestion de page non trouvée
app.use((req, res) => {
  res.status(404).send('Page non trouvée');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

