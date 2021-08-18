const postService = require('../../services/post');
const createPost = require('./create-post');
const deletePost = require('./delete-post');
const getAPost = require('./get-a-post');
const getAllPost = require('./get-all-post');
const updatePost = require('./update-post');

module.exports = Object.freeze({
  createPost: createPost({ createPost: postService.createPost }),
  updatePost: updatePost({ updatePost: postService.updatePost }),
  deletePost: deletePost({ deletePost: postService.deletePost }),
  allPost: getAllPost({ allPost: postService.getAllPosts }),
  getPost: getAPost({ getPost: postService.getAPost }),
});
