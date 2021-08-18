const db = require('../../db');
const addComment = require('./add-comment');
const updateComment = require('./update-comment');
const deleteComment = require('./delete-comment');
const getAComment = require('./get-a-comment');
const postComments = require('./get-post-comments');

module.exports = Object.freeze({
  addComment: addComment({ commentDB: db.commentDB }),
  updateComment: updateComment({ commentDB: db.commentDB }),
  deleteComment: deleteComment({ commentDB: db.commentDB }),
  getAComment: getAComment({ commentDB: db.commentDB }),
  postComments: postComments({ commentDB: db.commentDB }),
});
