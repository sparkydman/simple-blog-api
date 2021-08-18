const { Router } = require('express');
const callback = require('../../helper/express-callback');
const controller = require('../../controllers/post');

const route = Router();

route
  .route('/')
  .get(callback(controller.allPost))
  .post(callback(controller.createPost));
route
  .route('/:postId')
  .get(callback(controller.getPost))
  .put(callback(controller.updatePost))
  .delete(callback(controller.deletePost));

module.exports = route;
