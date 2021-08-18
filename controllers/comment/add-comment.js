module.exports =
  ({ addComment }) =>
  async ({ body, params }) => {
    try {
      const payload = {
        ...body,
        post: params.postId,
      };
      const user = await addComment(payload);
      return {
        body: user,
        statusCode: 201,
      };
    } catch (err) {
      return {
        body: { error: err.message },
        statusCode: 400,
      };
    }
  };
