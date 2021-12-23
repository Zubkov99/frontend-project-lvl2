/* eslint-disable */
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import getDifferences from '../src/getDifferences.js';
import fs from 'fs';
import parseIntoObj from '../src/parseIntoObj.js'
import convertObjInStr from '../src/convertObjInStr.js'


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let firstObj;
let secondObj;

// const firstObj = parseIntoObj(path.join(__dirname, '..', '__fixtures__', 'file1.json'));
// const secondObj = parseIntoObj(path.join(__dirname, '..', '__fixtures__', 'file2.json'));

beforeEach(() => {
    firstObj = parseIntoObj(path.join(__dirname, '..', '__fixtures__', 'file1.json'));
    secondObj = parseIntoObj(path.join(__dirname, '..', '__fixtures__', 'file2.json'));
  });

const expectedexpectedObj = {
    '  host': 'hexlet.io',
    '  - timeout': 50,
    '  + timeout': 20,
    '  - proxy': '123.234.53.22',
    '  - follow': false,
    '  + verbose': true
  };

test('getDifferences', () => {
  expect(getDifferences(firstObj, secondObj)).toEqual(convertObjInStr(expectedexpectedObj));
});
