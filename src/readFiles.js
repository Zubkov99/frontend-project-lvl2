import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';

const readFiles = (data) => {
  const fileExtname = path.extname(data);
  switch (fileExtname) {
    case '.json':
      return JSON.parse(fs.readFileSync(data));
    case '.yml':
      return yaml.load(fs.readFileSync(data, 'utf8'));
    case '.yaml':
      return yaml.load(fs.readFileSync(data, 'utf8'));
    default:
      throw new Error(`Wrong format  ${fileExtname}`);
  }
};

export default readFiles;
