module.exports =
  ({ createUser }) =>
  async (httpReq) => {
    try {
      const { body } = httpReq;
      const user = await createUser(body);
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
