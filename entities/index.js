const joi = require('joi');
const isValid = require('../utils/validate-id');
const post = require('./post');
const user = require('./user');
const comment = require('./comment');

module.exports = Object.freeze({
  post: post({ joi, isValid }),
  user: user({ joi }),
  comment: comment({ joi, isValid }),
});
