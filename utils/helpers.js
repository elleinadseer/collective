let charLimit = {
  value: null,
  generatedAt: null,
};

const getCharLimit = () => {
  const currentTime = new Date();

  // Check if a character limit exists and was generated within the last 24 hours
  if (charLimit.value !== null && charLimit.generatedAt !== null) {
    const storedTime = new Date(charLimit.generatedAt);
    const timeDiff = currentTime - storedTime;
    const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));

    if (hoursDiff < 24) {
      return charLimit.value;
    }
  }

  // Generate a new character limit and update the charLimit object
  charLimit = {
    value: Math.floor(Math.random() * (20 - 5 + 1) + 5),
    generatedAt: currentTime.toISOString(),
  };

  return charLimit.value;
};

module.exports = { getCharLimit };
