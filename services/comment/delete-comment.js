module.exports =
  ({ commentDB }) =>
  async ({ commentId }) => {
    return commentDB.deleteComment({ commentId });
  };
