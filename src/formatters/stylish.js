import _ from 'lodash';

const getSpace = (replay) => ' '.repeat(replay);

const stringify = (value, depth) => {
  if (!_.isPlainObject(value)) return String(value);

  const keys = Object.keys(value);
  const result = keys.map((item) => {
    if (_.isObject(value[item])) {
      return `${getSpace(depth + 8)}${item}: ${stringify(value[item], depth + 4)}`;
    }
    return `${getSpace(depth + 8)}${item}: ${value[item]}`;
  });

  return ['{', ...result, `${getSpace(depth + 4)}}`].join('\n');
};

const iteration = (tree, depth) => {
  const result = tree.map((item) => {
    const {
      name, status, value, oldValue, newValue, children,
    } = item;

    switch (status) {
      case 'added':
        return `${getSpace(depth + 2)}+ ${name}: ${stringify(value, depth)}`;
      case 'deleted':
        return `${getSpace(depth + 2)}- ${name}: ${stringify(value, depth)}`;
      case 'unchanged':
        return `${getSpace(depth + 2)}  ${name}: ${stringify(value, depth)}`;
      case 'changed':
        return `${getSpace(depth + 2)}- ${name}: ${stringify(oldValue, depth)}\n${getSpace(depth + 2)}+ ${name}: ${stringify(newValue, depth)}`;
      case 'hasChildren':
        return `${getSpace(depth + 2)}  ${name}: ${iteration(children, depth + 4)}`;
      default:
        throw new Error(`Status error ${status}.`);
    }
  });

  return ['{', ...result, `${getSpace(depth)}}`].join('\n');
};

const stylish = (data) => iteration(data, 0);

export default stylish;
