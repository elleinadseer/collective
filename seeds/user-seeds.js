const router = require("express").Router();

const { User } = require("../models");

const userData = [
  {
    user_name: "john_doe",
    user_password: "P@ssw0rd123",
    user_email: "john.doe@example.com",
    user_bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    user_name: "coding_master",
    user_password: "CodeRocks2023",
    user_email: "coding.master@example.com",
    user_bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    user_name: "tech_guru",
    user_password: "TechIsLife!",
    user_email: "tech.guru@example.com",
    user_bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    user_name: "dev_ninja",
    user_password: "N1nj@Dev",
    user_email: "dev.ninja@example.com",
    user_bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    user_name: "web_developer",
    user_password: "W3bDev2023",
    user_email: "web.developer@example.com",
    user_bio:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
