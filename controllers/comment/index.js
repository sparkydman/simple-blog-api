const commentService = require('../../services/comment');
const addComment = require('./add-comment');
const deleteComment = require('./delete-comment');
const getPostComments = require('./get-post-comments');
const updateComment = require('./update-comment');
const getAComment = require('./get-a-comment');

module.exports = Object.freeze({
  addComment: addComment({ addComment: commentService.addComment }),
  updateComment: updateComment({ updateComment: commentService.updateComment }),
  deleteComment: deleteComment({ deleteComment: commentService.deleteComment }),
  postComment: getPostComments({ postComments: commentService.postComments }),
  getComment: getAComment({ getComment: commentService.getAComment }),
});
