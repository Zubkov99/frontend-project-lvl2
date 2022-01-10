import path from 'path';
import parseJson from './parseJson.js';
import parserYaml from './parserYaml.js';

const readFiles = (data) => {
  const fileExtname = path.extname(data);
  switch (fileExtname) {
    case '.json':
      return parseJson(data);
    case '.yml':
      return parserYaml(data);
    case '.yaml':
      return parserYaml(data);
    default:
      throw new Error(`Wrong format  ${fileExtname}`);
  }
};

export default readFiles;
