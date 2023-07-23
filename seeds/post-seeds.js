const router = require("express").Router();
const { Post } = require("../models");
const postData = [
  {
    user_id: 1,
    post_content:
      "Im struggling with handling exceptions in my Python code. Any tips or resources to improve my understanding?",
    created_at: "2023-06-28 14:23:01",
    likes: 5,
  },
  {
    user_id: 2,
    post_content:
      "Which JavaScript libraries do you recommend for creating interactive and visually appealing data visualizations?",
    created_at: "2023-06-25 12:45:18",
    likes: 8,
  },
  {
    user_id: 3,
    post_content:
      "Im new to version control and want to learn Git. Any online courses or tutorials you found helpful?",
    created_at: "2023-07-01 09:12:37",
    likes: 3,
  },
  {
    user_id: 4,
    post_content:
      "What are some recommended best practices for designing RESTful APIs? Share your insights!",
    created_at: "2023-07-10 18:59:52",
    likes: 12,
  },
  {
    user_id: 5,
    post_content:
      "Looking for tips and techniques to optimize website performance and reduce page load times.",
    created_at: "2023-06-29 20:30:11",
    likes: 6,
  },
  {
    user_id: 3,
    post_content:
      "What are the key features of the latest version of React? I want to stay up-to-date with the latest changes.",
    created_at: "2023-07-15 11:05:28",
    likes: 9,
  },
  {
    user_id: 4,
    post_content:
      "I am curious about the benefits of using GraphQL over traditional REST APIs. Can someone provide a comparison?",
    created_at: "2023-07-18 09:47:15",
    likes: 11,
  },
  {
    user_id: 3,
    post_content:
      "Any recommendations for online resources to learn TypeScript? I want to level up my JavaScript skills.",
    created_at: "2023-07-20 15:20:33",
    likes: 4,
  },
  {
    user_id: 5,
    post_content:
      "I am struggling with CSS Flexbox. Can someone explain the concept of flex containers and items?",
    created_at: "2023-07-21 17:02:10",
    likes: 7,
  },
  {
    user_id: 1,
    post_content:
      "Looking for advice on optimising database queries for large datasets. Any best practices?",
    created_at: "2023-07-22 08:14:55",
    likes: 2,
  },
  {
    user_id: 1,
    post_content:
      "What are some popular design systems and UI component libraries for building modern web applications?",
    created_at: "2023-07-23 13:28:40",
    likes: 6,
  },
  {
    user_id: 2,
    post_content:
      "I want to implement authentication in my Node.js app. Any recommendations for secure authentication libraries?",
    created_at: "2023-07-24 09:15:22",
    likes: 8,
  },
  {
    user_id: 3,
    post_content:
      "How can I deploy a machine learning model built with TensorFlow to a web server for real-time predictions?",
    created_at: "2023-07-25 17:40:11",
    likes: 5,
  },
  {
    user_id: 2,
    post_content:
      "What are some best practices for securing a MongoDB database in a production environment?",
    created_at: "2023-07-28 14:02:19",
    likes: 7,
  },
  {
    user_id: 1,
    post_content:
      "I am interested in learning about serverless computing. Which cloud platforms offer serverless services?",
    created_at: "2023-07-29 09:30:56",
    likes: 12,
  },
  {
    user_id: 5,
    post_content:
      "How can I implement real-time chat functionality in my web application using WebSocket?",
    created_at: "2023-07-30 18:47:03",
    likes: 4,
  },
  {
    user_id: 3,
    post_content:
      "What are some effective ways to prevent common security vulnerabilities in web applications?",
    created_at: "2023-07-02 12:10:14",
    likes: 11,
  },
  {
    user_id: 2,
    post_content:
      "I want to start contributing to open-source projects. Any advice on finding beginner-friendly projects?",
    created_at: "2023-07-03 14:55:29",
    likes: 5,
  },
  {
    user_id: 4,
    post_content:
      "How can I set up a continuous integration and continuous deployment (CI/CD) pipeline for my project?",
    created_at: "2023-07-04 10:33:07",
    likes: 8,
  },
  {
    user_id: 5,
    post_content:
      "I am curious about the latest trends in front-end web development. What technologies should I keep an eye on?",
    created_at: "2023-07-06 09:22:44",
    likes: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;