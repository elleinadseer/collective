const router = require('express').Router();

const { Comment } = require('../models');

const commentData = [{
  comment_id: 1,
  user_id: 1,
  post_id: 1,
  comment_text: 'Great post! I found your explanation of recursion in Python very helpful. Thanks for sharing!',
  created_at: '2023-07-18 10:23:01',
  likes: 5
},
{
  comment_id: 2,
  user_id: 2,
  post_id: 1,
  comment_text: 'I have a different approach to solving that problem using dynamic programming. Let me know if youre interested!',
  created_at: '2023-07-18 12:45:18',
  likes: 8
},
{
  comment_id: 3,
  user_id: 3,
  post_id: 2,
  comment_text: 'In my experience, using a CSS framework like Bootstrap can greatly simplify front- end development.',
  created_at: '2023-07-18 15:12:37',
  likes: 3
},
{
  comment_id: 4,
  user_id: 4,
  post_id: 3,
  comment_text: 'Ive encountered a similar issue before. Have you checked your database configuration? That might be the cause.',
  created_at: '2023-07-18 18:59:52',
  likes: 12
},
{
  comment_id: 5,
  user_id: 5,
  post_id: 3,
  comment_text: 'Heres a helpful resource I came across that explains advanced JavaScript concepts in a clear and concise manner.',
  created_at: '2023-07-18 20:30:11',
  likes: 6
}];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;