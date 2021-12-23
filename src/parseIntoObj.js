import fs from 'fs';

const parseIntoObj = (file) => {
  const result = fs.readFileSync(file, (err, data) => {
    if (err) throw err;
    return data;
  });
  return JSON.parse(result);
};

export default parseIntoObj;
