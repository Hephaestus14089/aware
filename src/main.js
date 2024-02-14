import { runSet } from './runFunctions.js';
import { difficulties } from './customConfig.js';
import readline from 'node:readline'
import { stdin, stdout, exit } from 'node:process';
import { prompt } from './utilities.js';

const readlineInterface = readline.createInterface({ input: stdin, output: stdout });

export const main = async () => {
  while (true) {
    await runSet(difficulties, readlineInterface);

    const query = "\nEnter 'q' to quit and any other key to begin a new set: ";
    const userInput = await prompt(readlineInterface, query);

    if (userInput.charAt(0) === "q".charAt(0)) {
      readlineInterface.close();
      exit(0);
    }
  }
}

main();
