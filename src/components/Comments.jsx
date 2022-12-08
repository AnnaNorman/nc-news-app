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
    <>
      <section>
        {comments.length === 0 ? <h2>No comments yet</h2> : <h2>Comments</h2>}

        <ul className="comments-list">
          {comments.map((comment) => {
            return (
              <li className="actual-comments" key={comment.comment_id}>
                <p className="comment-author">{comment.author}</p>
                <p>{comment.body}</p>
                <p>{comment.votes} votes </p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
