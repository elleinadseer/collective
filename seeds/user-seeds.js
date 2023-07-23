const router = require("express").Router();
const { User } = require("../models");
const userData = [
  {
    user_name: "john_doe",
    user_password: "P@ssw0rd123",
    user_email: "john.doe@example.com",
    user_bio:
      "I'm a passionate developer who loves to explore new technologies and build innovative solutions. My journey into the world of programming started a few years back, and I haven't looked back since then. When I'm not coding, you can find me enjoying a good book or hiking in nature.",
  },
  {
    user_name: "coding_master",
    user_password: "CodeRocks2023",
    user_email: "coding.master@example.com",
    user_bio:
      "Coding is not just my profession; it's my passion. I believe in the power of clean, maintainable code and continuous learning. As a coding enthusiast, I'm always up for challenges and enjoy taking part in coding competitions. When I'm not in front of the screen, I love to cook and experiment with new recipes.",
  },
  {
    user_name: "tech_guru",
    user_password: "TechIsLife!",
    user_email: "tech.guru@example.com",
    user_bio:
      "Welcome to the world of technology! I'm a tech enthusiast who loves to share my knowled,e and help others in their tech journey. From software development to hardware tinkering, I find joy in everything tech-related. When I'm not exploring the latest gadgets, you can find me on the soccer field, playing my favorite sport.",
  },
  {
    user_name: "dev_ninja",
    user_password: "N1nj@Dev",
    user_email: "dev.ninja@example.com",
    user_bio:
      "Coding is an art, and I consider myself a ninja in this domain. With a keen eye for detail and a knack for problem-solving, I strive for perfection in every project I undertake. Apart from coding, I love practicing martial arts and meditating to find the perfect balance in life.",
  },
  {
    user_name: "web_developer",
    user_password: "W3bDev2023",
    user_email: "web.developer@example.com",
    user_bio:
      "Hello, fellow developers! I specialize in web development and am always excited about building user-friendly and responsive websites. As a web developer, I believe in the power of teamwork and collaboration. When I'm not coding, I'm usually exploring new places and capturing beautiful moments through photography.",
  },
];
const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;