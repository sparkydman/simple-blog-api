module.exports = ({ models }) => {
  const addComment = async (data) => {
    try {
      const comment = new models.Comment(data);
      await comment.save();
      await models.Post.findOneAndUpdate(
        { _id: data.post },
        { $push: { comments: comment._id } }
      );
      return comment;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const updateComment = async (data) => {
    try {
      const comment = await models.Comment.findOneAndUpdate(
        { _id: data.commentId },
        data,
        { new: true, runValidators: true }
      );
      return comment;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const getCommentById = async ({ id }) => {
    try {
      const comment = await models.Comment.findOne({ _id: id });
      return comment;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const deleteComment = async ({ commentId }) => {
    try {
      await models.Comment.findOneAndDelete({ _id: commentId });
      return 'comment deleted';
    } catch (err) {
      throw new Error(err.message);
    }
  };

  const getPostComments = async ({ postId }) => {
    try {
      let post = await models.Post.findOne({ _id: postId }).populate(
        'comments'
      );
      post = post.toObject();
      return post.comments;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  return Object.freeze({
    addComment,
    updateComment,
    getCommentById,
    deleteComment,
    getPostComments,
  });
};
