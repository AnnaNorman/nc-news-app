import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { useParams, Link } from "react-router-dom";

export default function Articles({ selectedTopic }) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles(selectedTopic).then((res) => {
      setArticles(res);
      setIsLoading(false);
    });
  }, [selectedTopic]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <section>
      <ul className="articles-list">
        {articles.map((article) => {
          return (
            <li key={article.item_id}>
              <p>{article.title}</p>
              <p className="author">{article.author}</p>
              <Link
                to={`/article/${article.article_id}`}
                className="each-individual-article-link"
              >
                View Article
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
