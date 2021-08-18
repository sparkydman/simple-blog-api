const entity = require('../../entities');
module.exports =
  ({ userDB }) =>
  async (userInfo) => {
    const makeUser = entity.user(userInfo);
    const isUserExist = await userDB.getUserByEmail({ email: makeUser.email });
    if (isUserExist) {
      return isUserExist;
    }
    return userDB.createUser({ data: makeUser });
  };
