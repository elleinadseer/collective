const router = require('express').Router();

// Import the model
// const Comment = require('models/Comment.js');

const { Comment } = require('../models');

const commentData = [
  {
    comment_id: '1',
    user_id: '1',
    comment_text: 'Hello!',
    // created_at: Current Timestamp
    likes: '0',
  },
  /*
  {
    comment_text: 'Hiya!',
    likes: '0',
  },
  */
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
