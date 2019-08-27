const userService = require('../services/UserService');

const getAllUsers = () => {
  return userService.getAllUsers();
};

const createUser = () => {};

const updateUserById = () => {};

const deleteUserById = () => {};

module.exports = {
  getAllUsers,
  createUser,
  updateUserById,
  deleteUserById
};
