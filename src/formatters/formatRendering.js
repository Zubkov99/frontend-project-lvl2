import stylish from './stylish.js';
import plain from './plain.js';

const mapper = {
  plain(data) {
    return plain(data);
  },
  stylish(data) {
    return stylish(data);
  },
  json(data) {
    return JSON.stringify(data);
  },
};

const formatRendering = (format, tree) => {
  switch (format) {
    case 'plain':
      return mapper.plain(tree);
    case 'json':
      return mapper.json(tree);
    case 'stylish':
      return mapper.stylish(tree);
    default:
      throw new Error(`Format error ${format}`);
  }
};

export default formatRendering;
