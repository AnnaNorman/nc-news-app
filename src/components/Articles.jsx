import { useEffect, useState } from "react";
import { getArticles } from "../api";

export default function Articles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <section className="articles-list">
      <ul>
        {articles.map((article) => {
          return (
            <li key={article.item_id}>
              <p>{article.title}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
