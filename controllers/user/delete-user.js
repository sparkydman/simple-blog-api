module.exports =
  ({ deleteUser }) =>
  async (httpReq) => {
    try {
      const { params } = httpReq;
      const user = await deleteUser({ userId: params.userId });
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
