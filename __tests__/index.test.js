import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import gendiff from '../src/gendiff.js';
// import readFiles from '../src/parsers/readFiles.js';

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

const file1Json = getFixturePath('file1.json');
const file2Json = getFixturePath('file2.json');
const file1Yml = getFixturePath('file1.yml');
const file2Yml = getFixturePath('file2.yml');

test('gendiff', () => {
  expect(gendiff(file1Json, file2Json, 'stylish')).toEqual(readFile(pathToResultJson));
  expect(gendiff(file1Yml, file2Yml, 'stylish')).toEqual(readFile(pathToResultYml));
  expect(gendiff(file1Yml, file2Yml, 'plain')).toEqual(readFile(resultPlain));
  expect(gendiff(file1Json, file2Json, 'plain')).toEqual(readFile(resultPlain));
  expect(gendiff(file1Yml, file2Yml, 'json')).toEqual(readFile(resultInJsonFormat));
  // expect(gendiff(file1Json, file2Json, 'stylish')).toEqual(readFile(pathToResultJson));
  // expect(gendiff(file1Yml, file2Yml, 'stylish')).toEqual(readFile(pathToResultYml));
  // expect(gendiff(file1Yml, file2Yml, 'plain')).toEqual(readFile(resultPlain));
  // expect(gendiff(file1Json, file2Json, 'plain')).toEqual(readFile(resultPlain));
  // expect(gendiff(file1Yml, file2Yml, 'json')).toEqual(readFile(resultInJsonFormat));
});
