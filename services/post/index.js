const db = require('../../db');
const addPost = require('./add-post');
const updatePost = require('./update-post');
const deletePost = require('./delete-post');
const getAllPosts = require('./get-all-posts');
const getAPost = require('./get-a-post');

module.exports = Object.freeze({
  createPost: addPost({ postDB: db.postDB }),
  updatePost: updatePost({ postDB: db.postDB }),
  deletePost: deletePost({ postDB: db.postDB }),
  getAllPosts: getAllPosts({ postDB: db.postDB }),
  getAPost: getAPost({ postDB: db.postDB }),
});
