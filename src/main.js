const { difficulties, categories } = require('./customConfig.js');
const { getRound } = require('./getFunctions.js');
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const readlineInterface = readline.createInterface({ input, output });

const runRound = async (readlineInterface, questions) => {
  const query = "enter option: ";
  const prompt = (query) => new Promise(resolve => readlineInterface.question(query, resolve));

  let roundQuestionCount = 1;
  let userScore = 0;

  for (const question of questions) {
    let options = [...question.incorrectAnswers];
    const correctAnswerIndex = Math.floor(Math.random() * 4); // TODO: get from random function in seperate file

    if (correctAnswerIndex === 3)
      options.push(question.correctAnswer);
    else
      options.splice(correctAnswerIndex, 0, question.correctAnswer);

    /** Building options string */
    let optionCount = 'a'.charCodeAt(0);  // initialised as 97 (ascii code for 'a')
    let optionStr = "";
    options.forEach(option => {
      optionStr += String.fromCharCode(optionCount++) + ') ' + option;
      optionStr += optionCount % 2 === 0 ? '\t\t\t' : '\n';  // two options in each line
    });
    optionStr = optionStr.slice(0, optionStr.length - 1); // remove last character (i.e. '\n')

    console.log(roundQuestionCount++ + '. ' + question.question.text);
    console.log(optionStr);

    const userAnswer = await prompt(query);

    if ((userAnswer.charCodeAt(0) - 97) === correctAnswerIndex) {
      console.log("Correct answer     \\o/ ");
      userScore++;
    }
    else {
      console.log("Wrong answer        :(");
      console.log("Correct answer: " + options[correctAnswerIndex]);
    }

    console.log() // print blank line after each question
  } // end of round loop

  return userScore;
};

const runSet = async (difficulties, readlineInterface) => {
  let totalUserScore = 0;
  let totalQuestions = 0;

  /**
  * TODO:
  *
  * Set rounds fetch drop cycle
  *  Fetch the next round while user is at the beginning of last subround of current round
  *  Delete the previous round cache (if present) while user ends first subround of current round
  *
  * Must provide set stats at the end of each set
  */

  for (const difficulty of difficulties) {
    // TODO:
    // start a round request and store the promise
    // const questions = getRound(categories, difficulties[atRound]);

    console.log(`\nFetching questions for next round...\t(difficulty: ${difficulty})\n`);
    // TODO: wrap getRound in try catch
    const questions = await getRound(categories, difficulty);

    const roundScore = await runRound(readlineInterface, questions);
    
    console.log(`End of round (difficulty: ${difficulty})`);
    console.log(`Round score: ${roundScore}/${questions.length}`);

    totalQuestions += questions.length;
    totalUserScore += roundScore;
  }  

  console.log("You have completed a set!")
  console.log(`Set score: ${totalUserScore}/${totalQuestions}`);
  
  readlineInterface.close();
};

/**
 * Main while loop within driver function
 * keeps track of state
 * and runs sets accordingly
 */

runSet(difficulties, readlineInterface);
