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
const resultPlain = getFixturePath('resultPlain.txt');
const resultInJsonFormat = getFixturePath('ymlToJsonFormat.txt');

test('parsing', () => {
  expect(parsing(getFixturePath('file1.json'), getFixturePath('file2.json'), 'stylish')).toEqual(readFile(pathToResultJson));
  expect(parsing(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'stylish')).toEqual(readFile(pathToResultYml));
  expect(parsing(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'plain')).toEqual(readFile(resultPlain));
  expect(parsing(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain')).toEqual(readFile(resultPlain));
  expect(parsing(getFixturePath('file1.yml'), getFixturePath('file2.yml'), 'json')).toEqual(readFile(resultInJsonFormat));
});
