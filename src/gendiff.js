import getDifferences from './getDifferences.js';
import formatRendering from './formatters/formatRendering.js';

const gendiff = (firstObj, secondObj, format) => {
  const result = getDifferences(firstObj, secondObj);
  return formatRendering(format, result);
};

export default gendiff;
