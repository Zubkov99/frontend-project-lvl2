import path from 'path';
import fs from 'fs';
import getDifferences from './getDifferences.js';
import formatRendering from './formatters/formatRendering.js';
import parse from './parse.js';

const readAndParse = (fielPath) => {
  const fileData = fs.readFileSync(fielPath, 'utf8');
  const fileExtname = path.extname(fielPath).slice(1);
  return parse(fileData, fileExtname);
};

const gendiff = (file1, file2, format) => {
  const firstObj = readAndParse(file1);
  const secondObj = readAndParse(file2);
  const processingResult = getDifferences(firstObj, secondObj);
  return formatRendering(format, processingResult);
};

export default gendiff;
