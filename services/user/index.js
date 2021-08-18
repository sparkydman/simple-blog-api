const db = require('../../db');
const register = require('./register');
const deleteUser = require('./delete-user');
const updateUser = require('./update-user');
const getAllUsers = require('./get-all-users');
const getAUser = require('./get-a-user');

module.exports = Object.freeze({
  register: register({ userDB: db.userDB }),
  deleteUser: deleteUser({ userDB: db.userDB }),
  updateUser: updateUser({ userDB: db.userDB }),
  getAllUsers: getAllUsers({ userDB: db.userDB }),
  getAUser: getAUser({ userDB: db.userDB }),
});
