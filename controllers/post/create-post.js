module.exports =
  ({ createPost }) =>
  async ({ body }) => {
    try {
      const user = await createPost(body);
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
