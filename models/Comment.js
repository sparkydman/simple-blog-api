const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    post: {
      type: mongoose.Types.ObjectId,
      ref: 'post',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('comment', CommentSchema);
