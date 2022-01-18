import yaml from 'js-yaml';

const mapper = {
  json(data) {
    return JSON.parse(data);
  },
  yaml(data) {
    return yaml.load(data);
  },
  yml(data) {
    return yaml.load(data);
  },
};

const parse = (data, type) => {
  if (mapper[type]) {
    return mapper[type](data);
  }
  throw new Error(`Type error ${type}`);
};

export default parse;
