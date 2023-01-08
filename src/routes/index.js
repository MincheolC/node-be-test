const express = require("express");
const { userController, articleController } = require("../controllers");
const router = express.Router();

// define the home page route
router.get("/health", (req, res) => {
  res.send("Welcome to API Server");
});

// API handler
// Method(verb) + Resource (noun)
router.get("/users", userController.getUsers);
router.post("/users", userController.createUser);
router.patch("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

router.get("/articles", articleController.getArticles);
router.post("/articles", articleController.createArticle);
router.patch("/articles/:id", articleController.updateArticle);
router.delete("/articles/:id", articleController.deleteArticle);

module.exports = router;
