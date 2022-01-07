import stylish from './stylish.js';
import plain from './plain.js';

const formatRendering = (format, tree) => {
  if (format === 'plain') {
    return plain(tree);
  }

  return stylish(tree);
};

export default formatRendering;
