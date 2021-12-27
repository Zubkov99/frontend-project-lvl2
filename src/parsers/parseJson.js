import fs from 'fs';

const parseJson = (file) => {
  const result = fs.readFileSync(file, (err, data) => {
    if (err) throw err;
    return data;
  });
  return JSON.parse(result);
};

export default parseJson;
