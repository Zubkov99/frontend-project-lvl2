#!/usr/bin/env node
import { Command } from 'commander';
import parsing from './src/parsers/parsing.js';

const program = new Command();

program
  .version('0.0.1', '-v, --vers', 'output the current version')
  .description('Compares two configuration files and shows a difference.', '-h')
  .option('-f --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    console.log(parsing(filepath1, filepath2));
  });

program.parse(process.argv);
