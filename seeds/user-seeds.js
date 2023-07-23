const router = require("express").Router();
const { User } = require("../models");
const userData = [
  {
    user_name: "john_doe",
    user_password: "P@ssw0rd123",
    user_email: "john.doe@example.com",
    user_bio:
      "I'm a passionate developer who loves to explore new technologies and build innovative solutions.",
  },
  {
    user_name: "coding_master",
    user_password: "CodeRocks2023",
    user_email: "coding.master@example.com",
    user_bio:
      "Coding is not just my profession; it's my passion. I believe in the power of clean, maintainable code and continuous learning.",
  },
  {
    user_name: "tech_guru",
    user_password: "TechIsLife!",
    user_email: "tech.guru@example.com",
    user_bio:
      "Welcome to the world of technology! I'm a tech enthusiast who loves to share my knowledge and help others in their tech journey.",
  },
  {
    user_name: "dev_ninja",
    user_password: "N1nj@Dev",
    user_email: "dev.ninja@example.com",
    user_bio:
      "Coding is an art, and I consider myself a ninja in this domain.",
  },
  {
    user_name: "web_developer",
    user_password: "W3bDev2023",
    user_email: "web.developer@example.com",
    user_bio:
      "Hello, fellow developers! I specialize in web development and am always excited about building user-friendly and responsive websites.",
  },
];
const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;