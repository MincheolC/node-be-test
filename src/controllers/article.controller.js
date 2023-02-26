const models = require("../models");

const getArticles = async (req, res) => {
  console.log("getArticles");
  // const articles = await models.article.findAll();
  // return res.send(articles);
};

const createArticle = async (req, res) => {
  const articles = await models.article.findAll();
  return res.send(articles);
};

const updateArticle = async (req, res) => {
  const articles = await models.article.findAll();
  return res.send(articles);
};

const deleteArticle = async (req, res) => {
  const articles = await models.article.findAll();
  return res.send(articles);
};

module.exports = {
  getArticles,
  createArticle,
  updateArticle,
  deleteArticle,
};
