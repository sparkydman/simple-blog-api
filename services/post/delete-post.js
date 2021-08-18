module.exports =
  ({ postDB }) =>
  async ({ postId }) => {
    const isPostExist = await postDB.getPostById({ id: postId });
    if (!isPostExist) {
      throw new Error('Post not found');
    }
    return postDB.deletePost({ postId });
  };
