module.exports =
  ({ getPost }) =>
  async ({ params }) => {
    try {
      const post = await getPost({ postId: params.postId });
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
