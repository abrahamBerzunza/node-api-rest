const users = [
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

module.exports = {
  getAllUsers
};
