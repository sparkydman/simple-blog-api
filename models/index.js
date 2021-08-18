const UserModel = require('./User');
const PostModel = require('./Post');
const CommentModel = require('./Comment');

module.exports = Object.freeze({
  User: UserModel,
  Post: PostModel,
  Comment: CommentModel,
});
