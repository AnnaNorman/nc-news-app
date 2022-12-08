import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://famous-skirt-clam.cyclic.app/api",
});

export const getArticles = (topic) => {
  return newsApi.get("/articles", { params: { topic } }).then((res) => {
    return res.data.articles;
  });
};
export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};
export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};
export const getCommentsByArticleId = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};
export const increaseVote = (article_id) => {
  const patchBody = {
    inc_votes: 1,
  };
  return newsApi.patch(`/articles/${article_id}`, patchBody).then((res) => {
    return res.data.article;
  });
};
export const postComment = (article_id, comment) => {
  const newComment = {
    username: user,
    body: comment,
  };
  return newsApi
    .post(`api/articles/${article_id}/comments`, newComment)
    .then((res) => {
      return res.data.comment;
    });
};
