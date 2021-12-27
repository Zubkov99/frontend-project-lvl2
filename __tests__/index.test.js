import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import parsing from '../src/parsers/parsing.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (file) => {
  const result = fs.readFileSync(file, (err, data) => {
    if (err) throw err;
    return data;
  });
  return result.toString();
};

const pathToResultJson = getFixturePath('resultJson.txt');
const pathToResultYml = getFixturePath('resultYml.txt');

test('parsing', () => {
  expect(parsing(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(readFile(pathToResultJson));
  expect(parsing(getFixturePath('file1.yml'), getFixturePath('file2.yml'))).toEqual(readFile(pathToResultYml));
});
