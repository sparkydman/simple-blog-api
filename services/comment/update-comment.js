const entity = require('../../entities');
module.exports =
  ({ commentDB }) =>
  async (commentInfo) => {
    const makeComment = entity.comment(commentInfo);
    const isCommentExist = await commentDB.getCommentById({
      id: commentInfo._id,
    });
    if (!isCommentExist) {
      throw new Error('comment not found');
    }
    return commentDB.updateComment({
      ...makeComment,
      commentId: commentInfo._id,
    });
  };
