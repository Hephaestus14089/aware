#! /usr/bin/env node

import { runSet } from '../src/runFunctions.js';
import { difficulties } from '../src/customConfig.js';
import readline from 'node:readline'
import { stdin, stdout, exit } from 'node:process';
import { prompt } from '../src/utilities.js';
import figlet from 'figlet';

const readlineInterface = readline.createInterface({ input: stdin, output: stdout });

const main = async () => {

  try {
    console.log(await figlet("AWARE"));
  } catch (err) {
    console.error(err);
    console.log("A W A R E");
  }

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
