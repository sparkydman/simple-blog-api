module.exports =
  ({ joi }) =>
  ({ email, lastname, firstname, role = 'user' }) => {
    const schema = joi.object({
      email: joi.string().email().required(),
      lastname: joi.string().optional().allow('').allow(null),
      firstname: joi.string().optional().allow('').allow(null),
      role: joi.string().valid('user', 'admin').default('user').required(),
    });

    const { error, value } = schema.validate({
      email,
      lastname,
      firstname,
      role,
    });
    if (error) {
      throw new Error(error.details[0].message);
    }

    return Object.freeze({
      email: value.email,
      lastname: value.lastname,
      firstname: value.firstname,
      role: value.role,
    });
  };
