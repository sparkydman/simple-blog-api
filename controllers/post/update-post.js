module.exports =
  ({ updatePost }) =>
  async ({ body, params }) => {
    try {
      const payload = {
        ...body,
        _id: params.postId,
      };
      const post = await updatePost(payload);
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
