import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, increaseVote } from "../api";

import Comments from "./Comments";

export default function Article() {
  const [article, setArticle] = useState({});
  const [votes, setVotes] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((res) => {
      setArticle(res);
      setIsLoading(false);
      setVotes(res.votes);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  const handleVote = (event) => {
    event.preventDefault();
    setVotes((currentVotes) => {
      return currentVotes + 1;
    });
    increaseVote(article_id).catch((err) => {
      setVotes((currentVotes) => {
        return currentVotes - 1;
      });
      console.log(err);
    });
  };

  return (
    <section className="article">
      <div>
        <h3>{article.title}</h3>
        <p className="body">{article.body}</p>
        <p className="article-author">Article by {article.author}</p>
        <p className="votes">{votes} votes</p>
        <button
          className="vote-button"
          onClick={(event) => {
            handleVote(event);
          }}
        >
          <span aria-label="votes for this comment"></span>
          Vote for this article
        </button>
      </div>
      <Comments className="comments" article_id={article_id} />
    </section>
  );
}
