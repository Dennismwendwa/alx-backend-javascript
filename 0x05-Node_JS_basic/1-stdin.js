#!/usr/bin/node
// this script reads input from SDTIN

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

process.stdout.write('Welcome to Holberton School, what is your name?\n');

rl.on('line', (input) => {
  if (input.trim() !== '') {
    process.stdout.write(`Your name is: ${input}\n`);
  }
});

rl.on('close', () => {
  process.stdout.write('This important software is now closing\n');
});
