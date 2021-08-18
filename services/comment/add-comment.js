const entity = require('../../entities');
module.exports =
  ({ commentDB }) =>
  async (commentInfo) => {
    const makeComment = entity.comment(commentInfo);
    return commentDB.addComment(makeComment);
  };
