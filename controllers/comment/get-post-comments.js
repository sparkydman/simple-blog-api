module.exports =
  ({ postComments }) =>
  async ({ params }) => {
    try {
      const post = await postComments({ postId: params.postId });
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
