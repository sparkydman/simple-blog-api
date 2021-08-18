module.exports =
  ({ getAUser }) =>
  async ({ params }) => {
    try {
      const post = await getAUser({ userId: params.userId });
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
