import { runSet } from './runFunctions.js';
import { difficulties } from './customConfig.js';
import readline from 'node:readline'
import { stdin, stdout } from 'node:process';

const readlineInterface = readline.createInterface({ input: stdin, output: stdout });

/**
 * Main while loop within driver function
 * keeps track of state
 * and runs sets accordingly
 */

export const main = async () => {
  await runSet(difficulties, readlineInterface);

  // await 
}

runSet(difficulties, readlineInterface);
