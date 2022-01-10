#!/usr/bin/env node
import { Command } from 'commander';
import gendiff from '../index.js';
import readFiles from '../src/parsers/readFiles.js';

const program = new Command();

program
  .version('0.0.1', '-v, --vers', 'output the current version')
  .description('Compares two configuration files and shows a difference.', '-h')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const { format } = program.opts();
    const firstObj = readFiles(filepath1);
    const secondObj = readFiles(filepath2);
    console.log(gendiff(firstObj, secondObj, format));
  });
program.parse(process.argv);
