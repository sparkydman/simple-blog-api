module.exports =
  ({ getComment }) =>
  async ({ params }) => {
    try {
      const post = await getComment({ commentId: params.commentId });
      return {
        body: post,
        statusCode: 200,
      };
    } catch (err) {
      return {
        body: { error: err.message },
        statusCode: 400,
      };
    }
  };
