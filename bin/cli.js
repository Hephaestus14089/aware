#! /usr/bin/env node

import { runSet } from '../src/runFunctions.js';
import { difficulties } from '../src/customConfig.js';
import readline from 'node:readline'
import { stdin, stdout, exit } from 'node:process';
import { prompt } from '../src/utilities.js';

const readlineInterface = readline.createInterface({ input: stdin, output: stdout });

console.log("A W A R E");

const main = async () => {
  while (true) {
    await runSet(difficulties, readlineInterface);

    const query = "\nEnter 'q' to quit and any other key to begin a new set: ";
    const userInput = await prompt(readlineInterface, query);

    if (userInput.charAt(0) === "q".charAt(0)) {
      readlineInterface.close();
      exit(0);
    }
  }
};

main();
