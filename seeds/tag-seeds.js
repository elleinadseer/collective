const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'comedy',
  },
  {
    tag_name: 'general',
  },
  {
    tag_name: 'help',
  },
  {
    tag_name: 'discussion',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
