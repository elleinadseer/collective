const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:post_id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.post_id);

    !postData
      ? res.status(404).json({ message: 'No post found with this id!' })
      : res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:post_id', withAuth, async (req, res) => {
  try {
    const postData = await Post.update(
      {
        post_content: req.body.text,
      },
      {
        where: {
          post_id: req.params.post_id,
          user_id: req.session.user_id,
        },
      }
    );
    !postData[0]
      ? res.status(404).json({ message: 'No post found with this id!' })
      : res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:post_id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        post_id: req.params.post_id,
        user_id: req.session.user_id,
      },
    });

    !postData
      ? res.status(404).json({ message: 'No post found with this id!' })
      : res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
