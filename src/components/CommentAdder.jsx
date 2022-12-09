import { useState } from "react";
import { postComment } from "../api";

export default function CommentAdder({ setComments, article_id }) {
  const [newComment, setNewComment] = useState("");
  const [err, setErr] = useState(null);

  const handleClick = (event) => {
    event.target.value.disabled = true;
    console.log("button clicked");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    postComment(article_id, newComment)
      .then((commentFromApi) => {
        setNewComment("");
        setComments((currComments) => {
          setErr(null);
          const newComments = [...currComments];
          newComments.unshift(commentFromApi);
          return newComments;
        });
      })
      .catch(() => {
        setErr("Comment didn't post");
      });
  };
  if (err) return <p>{err}</p>;
  return (
    <div>
      <form className="comment-adder" onSubmit={handleSubmit}>
        <textarea
          required
          id="newComment"
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
        ></textarea>
        <p>
          <button onClick={handleClick} className="comment-adder-button">
            Add a comment
          </button>
        </p>
      </form>
    </div>
  );
}
