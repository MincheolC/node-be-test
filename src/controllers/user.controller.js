const models = require("../models");

const getUsers = async (req, res) => {
  const users = await models.user.findAll();
  return res.send(users);
};

module.exports = {
  getUsers,
};
