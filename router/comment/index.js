const { Router } = require('express');
const callback = require('../../helper/express-callback');
const controller = require('../../controllers/comment');

const route = Router();

route
  .route('/post/:postId')
  .get(callback(controller.postComment))
  .post(callback(controller.addComment));
route
  .route('/:commentId')
  .get(callback(controller.getComment))
  .put(callback(controller.updateComment))
  .delete(callback(controller.deleteComment));

module.exports = route;
