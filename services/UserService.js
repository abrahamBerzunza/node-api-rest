let users = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 21
  },
  {
    id: 2,
    firstName: 'Jenny',
    lastName: 'Doe',
    age: 21
  }
];

const getAllUsers = () => {
  return users;
};

const getUserById = id => {
  return users.find(user => user.id === id);
};

const createUser = userData => {
  userData.id = users.length + 1;
  users = [...users, userData];
  return userData;
};

const updateUserById = (id, userData) => {};

const deleteUserById = id => {};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById
};
