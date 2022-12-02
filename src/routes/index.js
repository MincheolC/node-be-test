const express = require("express");
const { userController } = require("../controllers");
const router = express.Router();

// define the home page route
router.get("/health", (req, res) => {
  res.send("Welcome to API Server");
});

// API handler
router.get("/users", userController.getUsers);

module.exports = router;
