module.exports =
  ({ updateUser }) =>
  async (httpReq) => {
    try {
      const { body, params } = httpReq;
      const payload = {
        ...body,
        userId: params.userId,
      };
      const user = await updateUser(payload);
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
