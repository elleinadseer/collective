const router = require('express').Router();

const { Post } = require('../models');

const postData = [
  {
    user_id: 1,
    post_title: 'Help with Python exception handling',
    post_content: 'Im struggling with handling exceptions in my Python code. Any tips or resources to improve my understanding?',
    created_at: '2023-06-28 14:23:01',
    likes: 5
  },
  {
    user_id: 2,
    post_title: 'Best JavaScript libraries for data visualization',
    post_content: 'Which JavaScript libraries do you recommend for creating interactive and visually appealing data visualizations?',
    created_at: '2023-06-25 12:45:18',
    likes: 8
  },
  {
    user_id: 3,
    post_title: 'Recommendations for learning Git',
    post_content: 'Im new to version control and want to learn Git. Any online courses or tutorials you found helpful?',
    created_at: '2023-07-01 09:12:37',
    likes: 3
  },
  {
    user_id: 4,
    post_title: 'Best practices for RESTful API design',
    post_content: 'What are some recommended best practices for designing RESTful APIs? Share your insights!',
    created_at: '2023-07-10 18:59:52',
    likes: 12
  },
  {
    user_id: 5,
    post_title: 'Tips for improving website performance',
    post_content: 'Looking for tips and techniques to optimize website performance and reduce page load times.',
    created_at: '2023-06-29 20:30:11',
    likes: 6
  }];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
