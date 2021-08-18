module.exports =
  ({ commentDB }) =>
  ({ postId }) =>
    commentDB.getPostComments({ postId });
