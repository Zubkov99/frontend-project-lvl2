import path from 'path';
import fs from 'fs';
import yaml from 'js-yaml';

const mapper = {
  json(data) {
    return JSON.parse(fs.readFileSync(data));
  },
  yaml(data) {
    return yaml.load(fs.readFileSync(data, 'utf8'));
  },
};

const parse = (data, type) => {
  switch (type) {
    case '.json':
      return mapper.json(data);
    case '.yml':
      return mapper.yaml(data);
    case '.yaml':
      return mapper.yaml(data);
    default:
      throw new Error(`Type error ${type}`);
  }
};

const readFiles = (data) => {
  const fileExtname = path.extname(data);
  return parse(data, fileExtname);
};

export default readFiles;
