import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../api";

export default function Article() {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((res) => {
      setArticle(res);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <section className="article">
      <div>
        <h3>{article.title}</h3>
        <p className="body">{article.body}</p>
        <p className="article-author">{article.author}</p>
      </div>
    </section>
  );
}
