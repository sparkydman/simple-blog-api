module.exports =
  ({ allPost }) =>
  async () => {
    try {
      const post = await allPost();
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
