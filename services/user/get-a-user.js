module.exports =
  ({ userDB }) =>
  ({ userId }) =>
    userDB.getUserById({ userId });
