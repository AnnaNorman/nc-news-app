import { useEffect, useState } from "react";

import { getCommentsByArticleId, patchComment } from "../api";

export default function Comments({ article_id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((res) => {
      setComments(res);
    });
  }, [article_id]);

  return (
    <section>
      <h2 className="comment-header">Comments</h2>

      <ul className="comments-list">
        {comments.map((comment) => {
          return (
            <li className="actual-comments" key={comment.comment_id}>
              <p>{comment.author}</p>
              <p>{comment.body}</p>
              <p>{comment.votes} votes </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
