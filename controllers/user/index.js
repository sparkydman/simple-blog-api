const userService = require('../../services/user');
const createUser = require('./create-user');
const updateUser = require('./update-user');
const deleteUser = require('./delete-user');
const getAllUser = require('./get-all-user');
const getAUser = require('./get-a-User');

module.exports = Object.freeze({
  createUser: createUser({ createUser: userService.register }),
  updateUser: updateUser({ updateUser: userService.updateUser }),
  deleteUser: deleteUser({ deleteUser: userService.deleteUser }),
  getAllUsers: getAllUser({ allUsers: userService.getAllUsers }),
  getAUser: getAUser({ getAUser: userService.getAUser }),
});
