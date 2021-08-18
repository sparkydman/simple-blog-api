module.exports =
  ({ deletePost }) =>
  async ({ params }) => {
    try {
      const user = await deletePost({ postId: params.postId });
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
