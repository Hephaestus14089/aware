const serverUrl = "https://the-trivia-api.com/v2";

const questionsEndpoint = serverUrl + "/questions";

const difficulties = ["easy", "medium", "hard"];

const heavierCategories = [
  "society_and_culture",
  "arts_and_literature",
  "film_and_tv",
  "history",
  "geography"
];

const lighterCategories = [
  "music",
  "science",
  "general_knowledge",
  "sport_and_leisure",
  "food_and_drink"
];

// const allCategories = [ ...heavierCategories, ...lighterCategories ];

const getQuestions = async (params) => {
  const reqUrl = questionsEndpoint + '?' + params;
  console.log("request url: " + reqUrl); // debug output

  const res = await fetch(reqUrl);
  const questions = await res.json();

  return questions;
};

/**
 * Question rounds fetch drop cycle
 *
 * 15 questions total in each complete round
 * 3 subparts with 5 questions each
 * 2 subparts with heavy categories
 * 1 subpart with light category
 *
 * get all questions from subparts within a complete round and shuffle
 *
 * May be :-
 *  Fetch the next round while user is at the beginning of last subround of current round
 *  Delete the previous round cache (if present) while user ends first subround of current round
 *
 * 3 rounds together constitute a set
 * 1st round diffculty = easy
 * 2nd round diffculty = medium
 * 3nd round diffculty = hard
 */

const getPart = async (categories, difficulty) => {};

/**
 * Main while loop within driver function
 * keeps track of state
 * and calls functions accordingly
 */

const limit = 5
const params = `limit=${limit}`

getQuestions(params).then(questions => {
  console.log(questions);
});
