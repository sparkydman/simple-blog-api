const entity = require('../../entities');
module.exports =
  ({ userDB }) =>
  async (userInfo) => {
    const makeUser = entity.user(userInfo);
    const isUserExist = await userDB.getUserById({ userId: userInfo.userId });
    if (!isUserExist) {
      throw new Error('User not found');
    }
    let payload = {
      ...makeUser,
      email: isUserExist.email,
      role: userInfo.role ? makeUser.role : isUserExist.role,
    };
    return userDB.updateUser({ ...payload, userId: userInfo.userId });
  };
