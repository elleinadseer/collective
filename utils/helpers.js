const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');

let charLimit = {
  value: null,
  generatedAt: null,
};

const getCharLimit = () => {
  const currentTime = dayjs();

  // Check if a character limit exists and when it was generated
  if (charLimit.value !== null && charLimit.generatedAt !== null) {
    const storedTime = dayjs(charLimit.generatedAt);
    const timeDiff = currentTime.diff(storedTime, 'hours');

    // Keep current charLimit while time passed is less than the specified time
    if (timeDiff < 24) {
      return charLimit.value;
    }
  }

  // Generate a new character limit and update the charLimit object
  charLimit = {
    value: Math.floor(Math.random() * (141 - 42 + 1) + 42),
    generatedAt: currentTime.toISOString(),
  };

  return charLimit.value;
};

const format_date = (date) => {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

const timeago = (timestamp) => {
  dayjs.extend(relativeTime);
  return dayjs().fromNow(timestamp);
};

module.exports = { getCharLimit, format_date, timeago };
