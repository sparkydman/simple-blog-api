module.exports =
  ({ joi, isValid }) =>
  ({ text, post, author }) => {
    const schema = joi.object({
      text: joi.string().required(),
    });
    const { error, value } = schema.validate({ text });
    if (error) {
      throw new Error(error.details[0].message);
    }
    if (!isValid(author)) {
      throw new Error('Invalid author id');
    }
    if (!isValid(post)) {
      throw new Error('Invalid post id');
    }
    return Object.freeze({
      text: value.text,
      post,
      author,
    });
  };
