import path from 'path';
import parseJson from './parseJson.js';
import parserYaml from './parserYaml.js';
import getDifferences from '../getDifferences.js';

const parsing = (file1, file2) => {
  const file1extname = path.extname(file1);
  const file2extname = path.extname(file2);

  let firstObj;
  let secondObj;

  if (file1extname === '.yml' && file2extname === '.yml') {
    firstObj = parserYaml(file1);
    secondObj = parserYaml(file2);
  }

  if (file1extname === '.json' && file2extname === '.json') {
    firstObj = parseJson(file1);
    secondObj = parseJson(file2);
  }

  return getDifferences(firstObj, secondObj);
};

export default parsing;
