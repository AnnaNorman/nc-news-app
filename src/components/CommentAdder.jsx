import { useState } from "react";
import { postComment } from "../api";

export default function CommentAdder({ setComments, article_id }) {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    postComment(article_id, newComment).then((commentFromApi) => {
      setNewComment("");
      setComments((currComments) => {
        const newComments = [...currComments];
        newComments.push(commentFromApi);
        return newComments;
      });
    });
  };

  return (
    <div>
      <form className="comment-adder" onSubmit={handleSubmit}>
        <textarea
          id="newComment"
          value={newComment}
          onChange={(event) => setNewComment(event.target.value)}
        ></textarea>
        <p>
          <button className="comment-adder-button">Add a comment</button>
        </p>
      </form>
    </div>
  );
}
