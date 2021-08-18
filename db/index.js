const models = require('../models');
const userDB = require('./user-db');
const postDB = require('./post-db');
const commentDB = require('./comment-db');

module.exports = Object.freeze({
  userDB: userDB({ models }),
  postDB: postDB({ models }),
  commentDB: commentDB({ models }),
});
