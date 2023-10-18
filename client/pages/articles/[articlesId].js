// pages/articles/[articleId].js
import Navbar from '../../components/Navbar';
import { useRouter } from 'next/router';

function Article() {
  const router = useRouter();
  const { articleId } = router.query;

  return (
    <div>

      <h1>Liste des articles</h1>
      <h2>Article ID : {articleId}</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
      {/* Le contenu de votre page d'article dynamique */}
    </div>
  );
}

export default Article;

export const articles = [
    { id: 1, title: 'Premier article', content: 'Contenu du premier article' },
    { id: 2, title: 'Deuxième article', content: 'Contenu du deuxième article' },
    // ...
  ];