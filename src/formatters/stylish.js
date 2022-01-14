import _ from 'lodash';

const getSpace = (replay) => ' '.repeat(replay);

const upLvlOfDepth = (lvl) => {
  const counter = 4;
  return counter * lvl;
};

const stringify = (value, depth) => {
  if (!_.isObject(value)) return String(value);

  const keys = Object.keys(value);
  const result = keys.map((item) => {
    if (_.isObject(value[item])) {
      return `${getSpace(depth + upLvlOfDepth(2))}${item}: ${stringify(value[item], depth + upLvlOfDepth(1))}`;
    }
    return `${getSpace(depth + upLvlOfDepth(2))}${item}: ${value[item]}`;
  });

  return ['{', ...result, `${getSpace(depth + upLvlOfDepth(1))}}`].join('\n');
};

const iteration = (tree, depth) => {
  const result = tree.map((item) => {
    const {
      name, status, value, oldValue, newValue, children,
    } = item;

    switch (status) {
      case 'added':
        return `${getSpace(depth + upLvlOfDepth(1) - 2)}+ ${name}: ${stringify(value, depth)}`;
      case 'deleted':
        return `${getSpace(depth + upLvlOfDepth(1) - 2)}- ${name}: ${stringify(value, depth)}`;
      case 'unchanged':
        return `${getSpace(depth + upLvlOfDepth(1) - 2)}  ${name}: ${stringify(value, depth)}`;
      case 'changed':
        return `${getSpace(depth + upLvlOfDepth(1) - 2)}- ${name}: ${stringify(oldValue, depth)}\n${getSpace(depth + upLvlOfDepth(1) - 2)}+ ${name}: ${stringify(newValue, depth)}`;
      case 'hasChildren':
        return `${getSpace(depth + upLvlOfDepth(1) - 2)}  ${name}: ${iteration(children, depth + upLvlOfDepth(1))}`;
      default:
        throw new Error(`Status error ${status}.`);
    }
  });

  return ['{', ...result, `${getSpace(depth)}}`].join('\n');
};
const stylish = (data) => iteration(data, 0);

export default stylish;
