module.exports =
  ({ joi, isValid }) =>
  ({ title, body, author }) => {
    const schema = joi.object({
      title: joi.string().required(),
      body: joi.string().required(),
    });
    const { error, value } = schema.validate({ title, body });
    if (error) {
      throw new Error(error.details[0].message);
    }
    if (!isValid(author)) {
      throw new Error('Invalid author id');
    }
    return Object.freeze({
      title: value.title,
      body: value.body,
      author,
    });
  };
