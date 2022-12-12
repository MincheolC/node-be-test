const express = require("express");
const { userController } = require("../controllers");
const router = express.Router();

// define the home page route
router.get("/health", (req, res) => {
  res.send("Welcome to API Server");
});

// API handler
router.get("/users", userController.getUsers);
router.post("/users", userController.createUser);
router.patch("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
