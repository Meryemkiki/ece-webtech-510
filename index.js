const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();

// Base de données fictive
const db = {
  articles: [
    {
      id: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
      title: 'Mon article',
      content: 'Contenu de l"article.',
      date: '04/10/2022',
      author: 'Liz Gringer'
    }
  ],
  comments: [
    {
      id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
      timestamp: 1664835049,
      content: 'Contenu du commentaire.',
      articleId: '6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b',
      author: 'Bob McLaren'
    }
  ]
}
 
// Middleware pour lire le JSON
app.use(express.json());

// Route pour la page d'accueil
app.get('/', (req, res) => {
  res.send('Bienvenue sur la page d\'accueil!');
});

// Route pour dire bonjour
app.get('/hello', (req, res) => {
  res.send('Hello, webtech-510');
});

// Route pour afficher le contenu du fichier about.json
app.get('/about', (req, res) => {
  const fs = require('fs');
  const filePath = './content/about.json';
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Erreur interne du serveur');
      return;
    }
    res.json(JSON.parse(data));
  });
});

// Route pour lister tous les articles
app.get('/articles', (req, res) => {
  res.json(db.articles);
});

// Route pour ajouter un nouvel article
app.post('/articles', (req, res) => {
  const { title, content, author, date } = req.body;
  const newArticle = {
    id: uuidv4(),
    title,
    content,
    author,
    date
  };
  db.articles.push(newArticle);
  res.json(newArticle);
});

// Route pour lister les commentaires d'un article
app.get('/articles/:articleId/comments', (req, res) => {
  const articleId = req.params.articleId;
  const comments = db.comments.filter(c => c.articleId === articleId);
  res.json(comments);
});

// Route pour ajouter un commentaire à un article
app.post('/articles/:articleId/comments', (req, res) => {
  const articleId = req.params.articleId;
  const { content, author } = req.body;
  const timestamp = Date.now();
  const newComment = {
    id: uuidv4(),
    content,
    articleId,
    author,
    timestamp
  };
  db.comments.push(newComment);
  res.json(newComment);
});

// Lancement du serveur
app.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
});


