const { Router } = require('express');
const callback = require('../../helper/express-callback');
const controller = require('../../controllers/user');

const route = Router();

route
  .route('/')
  .get(callback(controller.getAllUsers))
  .post(callback(controller.createUser));
route
  .route('/:userId')
  .get(callback(controller.getAUser))
  .put(callback(controller.updateUser))
  .delete(callback(controller.deleteUser));

module.exports = route;
