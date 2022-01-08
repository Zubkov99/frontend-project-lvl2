import getDifferences from './getDifferences.js';
import formatRendering from './formatters/formatRendering.js';
import convertToObj from './parsers/convertToObj.js';

const gendiff = (file1, file2, format) => {
  const firstObj = convertToObj(file1);
  const secondObj = convertToObj(file2);
  const result = getDifferences(firstObj, secondObj);

  return formatRendering(format, result);
};

export default gendiff;
