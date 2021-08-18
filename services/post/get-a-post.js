module.exports =
  ({ postDB }) =>
  ({ postId }) =>
    postDB.getPostById({ id: postId });
