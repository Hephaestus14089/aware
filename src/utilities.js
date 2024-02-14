const shuffleArray = (array) => {
  /* Durstenfeld shuffle algorithm */
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const randomInRange = (lowerLimit, upperLimit) => {
  const rangeDiff = upperLimit - lowerLimit;
  const randomNumber  = Math.floor(Math.random() * rangeDiff);
  return (lowerLimit + randomNumber);
}

const prompt = (readlineInterface, query) => new Promise(resolve =>
  readlineInterface.question(query, resolve)
);

export { shuffleArray, randomInRange, prompt };
