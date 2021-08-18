module.exports =
  ({ userDB }) =>
  async ({ userId }) => {
    const isUserExist = await userDB.getUserById({ userId });
    if (!isUserExist) {
      throw new Error('User not found');
    }
    return userDB.deleteUser({ userId });
  };
