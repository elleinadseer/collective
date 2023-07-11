const router = require('express').Router();

// Import the model
const User = require('../../models/User');

// const { User } = require('../models');

const userData = [
  {
    // user_id: auto increment 
    user_name: 'user1',
    user_password: 'user1password',
    user_email: 'user1email@email.com',
  },
  {
    // user_id: auto increment 
    user_name: 'user2',
    user_password: 'user2password',
    user_email: 'user2email@email.com',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
