const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    body: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    comments: [{ type: mongoose.Types.ObjectId, ref: 'comment' }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('post', PostSchema);
