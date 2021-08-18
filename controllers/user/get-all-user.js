module.exports =
  ({ allUsers }) =>
  async () => {
    try {
      const post = await allUsers();
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
