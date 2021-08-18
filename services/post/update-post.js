const entity = require('../../entities');
module.exports =
  ({ postDB }) =>
  async (postInfo) => {
    const makePost = entity.post(postInfo);
    const isPostExist = await postDB.getPostById({ id: postInfo._id });
    if (!isPostExist) {
      throw new Error('Post not found');
    }
    return postDB.updatePost({ ...makePost, postId: postInfo._id });
  };
