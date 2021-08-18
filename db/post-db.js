module.exports = ({ models }) => {
  const createPost = async ({ data }) => {
    try {
      const post = new models.Post(data);
      await post.save();
      return post;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const updatePost = async (data) => {
    try {
      const post = await models.Post.findOneAndUpdate(
        { _id: data.postId },
        data,
        { new: true, runValidators: true }
      );
      return post;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const getPostById = async ({ id }) => {
    try {
      const post = await models.Post.findOne({ _id: id });
      return post;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const deletePost = async ({ postId }) => {
    try {
      await models.Post.findOneAndDelete({ _id: postId });
      return 'post deleted';
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const getAllPosts = async () => {
    try {
      const posts = await models.Post.find({});
      return posts;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  return Object.freeze({
    createPost,
    updatePost,
    getPostById,
    deletePost,
    getAllPosts,
  });
};
