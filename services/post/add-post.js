const entity = require('../../entities');
module.exports =
  ({ postDB }) =>
  async (postInfo) => {
    const makePost = entity.post(postInfo);
    return postDB.createPost({ data: makePost });
  };
