const models = require("../models");

const getUsers = async (req, res) => {
  const users = await models.user.findAll();
  return res.send(users);
};

const createUser = async (req, res) => {
  const users = await models.user.findAll();
  return res.send(users);
};

const updateUser = async (req, res) => {
  const users = await models.user.findAll();
  return res.send(users);
};

const deleteUser = async (req, res) => {
  const users = await models.user.findAll();
  return res.send(users);
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
