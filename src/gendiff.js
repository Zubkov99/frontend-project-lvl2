import getDifferences from './getDifferences.js';
import formatRendering from './formatters/formatRendering.js';
import readFiles from './parsers/readFiles.js';

const gendiff = (file1, file2, format) => {
  const firstObj = readFiles(file1);
  const secondObj = readFiles(file2);
  const processingResult = getDifferences(firstObj, secondObj);
  return formatRendering(format, processingResult);
};

export default gendiff;
