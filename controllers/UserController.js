const userService = require('../services/UserService');

const getAllUsers = () => {
  return userService.getAllUsers();
};

const getUserById = id => {
  return userService.getUserById(id);
};

const createUser = userData => {
  return userService.createUser(userData);
};

const updateUserById = () => {};

const deleteUserById = () => {};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById
};
