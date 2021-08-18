module.exports =
  ({ commentDB }) =>
  ({ commentId }) =>
    commentDB.getCommentById({ id: commentId });
