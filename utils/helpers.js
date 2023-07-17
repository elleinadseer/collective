const dayjs = require('dayjs');

let charLimit = {
  value: null,
  generatedAt: null,
};

const getCharLimit = () => {
  const currentTime = dayjs();

  // Check if a character limit exists and when it was generated
  if (charLimit.value !== null && charLimit.generatedAt !== null) {
    const storedTime = dayjs(charLimit.generatedAt);
    const timeDiff = currentTime.diff(storedTime, 'second');

    // Keep current charLimit while time passed is less than the specified time
    if (timeDiff < 5) {
      return charLimit.value;
    }
  }

  // Generate a new character limit and update the charLimit object
  charLimit = {
    value: Math.floor(Math.random() * (200 - 42 + 1) + 42),
    generatedAt: currentTime.toISOString(),
  };

  return charLimit.value;
};

module.exports = { getCharLimit };
