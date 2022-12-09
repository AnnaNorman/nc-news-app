import { useState } from "react";
import { postComment } from "../api";

export default function CommentAdder({ setComments, article_id }) {
  const [newComment, setNewComment] = useState("");
  const [err, setErr] = useState(null);
  const [isPosting, setIsPosting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPosting(true);
    postComment(article_id, newComment)
      .then((commentFromApi) => {
        setIsPosting(false);
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
          <button
            type="submit"
            className="comment-adder-button"
            disabled={isPosting}
          >
            Add a comment
          </button>
        </p>
      </form>
    </div>
  );
}
