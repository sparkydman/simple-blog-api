module.exports =
  ({ updateComment }) =>
  async ({ body, params }) => {
    try {
      const payload = {
        ...body,
        _id: params.commentId,
      };
      const post = await updateComment(payload);
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
