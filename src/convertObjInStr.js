const convertObjInStr = (obj) => {
  let str = '{';
  // eslint-disable-next-line no-restricted-syntax
  for (const [key, value] of Object.entries(obj)) {
    str += `\n${key}: ${value}`;
  }
  return `${str}\n}`;
};

export default convertObjInStr;
