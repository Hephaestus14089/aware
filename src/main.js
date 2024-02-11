const { difficulties, categories } = require('./customConfig.js');
const { getRound } = require('./getFunctions.js');

/**
 * Question rounds fetch drop cycle
 *
 * May be :-
 *  Fetch the next round while user is at the beginning of last subround of current round
 *  Delete the previous round cache (if present) while user ends first subround of current round
 */

const runSet = async () => {
  let atRound = 0;
  let atQuestionInRound = 0;

  const questions = await getRound(categories, difficulties[atRound]);
  console.log(questions);
};

/**
 * Main while loop within driver function
 * keeps track of state
 * and calls functions accordingly
 */

runSet();
