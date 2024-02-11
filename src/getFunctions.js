const { questionsEndpoint } = require('./customConfig.js');
const { shuffleArray } = require('./utilities.js');

const getQuestions = async (paramStr) => {
  const reqUrl = questionsEndpoint + '?' + paramStr;

  const res = await fetch(reqUrl);
  const questions = await res.json();

  return questions;
};

const getSubpart = async (categories, difficulty) => {
  const limit = 5;

  const params = {
    'limit': limit + '',
    'categories': categories.join(','),
    'difficulties': difficulty
  };

  const paramStr = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');

  const questions = await getQuestions(paramStr);
  return questions;
};

const getRound = async (categories, difficulty) => {
  const [heavierCategories, lighterCategories] = [categories['heavier'], categories['lighter']];

  const subPartOne = await getSubpart(lighterCategories, difficulty);
  const subPartTwo = await getSubpart(heavierCategories, difficulty);
  const subPartThree = await getSubpart(heavierCategories, difficulty);

  const questions = [...subPartOne, ...subPartTwo, ...subPartThree];
  shuffleArray(questions);

  return questions;
};

module.exports = { getRound };
