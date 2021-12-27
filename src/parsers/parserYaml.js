import yaml from 'js-yaml';
import fs from 'fs';

// eslint-disable-next-line consistent-return
const parserYaml = (file) => {
  try {
    const data = yaml.load(fs.readFileSync(file, 'utf8'));
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default parserYaml;
