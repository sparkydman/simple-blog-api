module.exports =
  ({ deleteComment }) =>
  async ({ params }) => {
    try {
      const user = await deleteComment({ commentId: params.commentId });
      return {
        body: user,
        statusCode: 200,
      };
    } catch (err) {
      return {
        body: { error: err.message },
        statusCode: 400,
      };
    }
  };
