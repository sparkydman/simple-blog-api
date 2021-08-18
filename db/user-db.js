module.exports = ({ models }) => {
  return Object.freeze({
    createUser,
    getUserByEmail,
    deleteUser,
    updateUser,
    getAllUsers,
    getUserById,
  });

  async function getUserByEmail({ email }) {
    try {
      const user = await models.User.findOne({ email });
      return user;
    } catch (err) {
      throw new Error(err.message);
    }
  }
  async function getUserById({ userId }) {
    try {
      const user = await models.User.findOne({ _id: userId });
      return user;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async function createUser({ data }) {
    try {
      const user = new models.User(data);
      await user.save();
      return user;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async function deleteUser({ userId }) {
    try {
      await models.User.findOneAndDelete({ _id: userId });
      return 'user deleted';
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async function updateUser(data) {
    try {
      const user = await models.User.findOneAndUpdate(
        { _id: data.userId },
        data,
        { new: true, runValidators: true }
      );
      return user;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async function getAllUsers() {
    try {
      const users = await models.User.find({});
      return users;
    } catch (err) {
      throw new Error(err.message);
    }
  }
};
