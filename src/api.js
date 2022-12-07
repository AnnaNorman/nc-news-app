import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://famous-skirt-clam.cyclic.app",
});

export const getArticles = (topic) => {
  return newsApi.get("/api/articles", { params: { topic } }).then((res) => {
    return res.data.articles;
  });
};
export const getTopics = () => {
  return newsApi.get("/api/topics").then((res) => {
    return res.data.topics;
  });
};
export const getArticleById = (article_id) => {
  return newsApi.get(`/api/articles/${article_id}`).then((res) => {
    console.log(res);
    return res.data.article;
  });
};
