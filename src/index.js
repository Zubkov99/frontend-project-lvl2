import { Command } from 'commander';
import parsing from './parsers/parsing.js';

const gendiff = () => {
  const program = new Command();

  program
    .version('0.0.1', '-v, --vers', 'output the current version')
    .description('Compares two configuration files and shows a difference.', '-h')
    .option('-f, --format <type>', 'output format', 'stylish')
    .arguments('<filepath1> <filepath2>')
    .action((filepath1, filepath2) => {
      const { format } = program.opts();
      console.log(parsing(filepath1, filepath2, format));
    });

  program.parse(process.argv);
};

export default gendiff;
