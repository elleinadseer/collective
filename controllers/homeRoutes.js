const router = require('express').Router();
const { where } = require('sequelize');
const { Post, Comment, User } = require('../models');
const withAuth = require('../utils/auth');

const tags = ['comedy', 'general', 'help', 'discussion'];

router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['user_name'],
        },
      ],
      order: [['created_at', 'DESC']],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    if (req.session.logged_in) {
      const user = await User.findByPk(req.session.user_id);
      //const user = await User.findByPk(1);
      const loggedOnUser = user.get({ plain: true });

      res.render('homepage', {
        posts,
        logged_in: req.session.logged_in,
        loggedOnUser,
        tags,
      });
    } else {
      res.render('homepage', {
        posts,
        logged_in: req.session.logged_in,
        tags,
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/user/:id', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['user_name'],
        },
      ],
      where: {
        user_id: req.params.id,
      },
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    //const user = await User.findByPk(req.session.user_id);
    const user = await User.findByPk(req.params.id);
    const loggedOnUser = user.get({ plain: true });

    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
      loggedOnUser,
      tags,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:post_id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.post_id, {
      include: [
        {
          model: User,
          attributes: ['user_name'],
        },
        {
          model: Comment,
          attributes: ['comment_text', 'created_at', 'likes'],
        },
      ],
    });

    const post = postData.get({ plain: true });

    /*     res.status(200).json({
      ...post,
      logged_in: req.session.logged_in,
    }); */

    res.render('thread', {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['user_password'] },
      include: [{ model: Post }, { model: Comment }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/user/:user_id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.user_id, {
      attributes: { exclude: ['user_password'] },
      include: [{ model: Post }, { model: Comment }],
    });

    const user = userData.get({ plain: true });

    // Maybe swap this out for a seperate 'user' view?
    res.render('profile', {
      ...user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to their profile route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('signup');
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to their profile route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
