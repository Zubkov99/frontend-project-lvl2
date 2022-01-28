import _ from 'lodash';

const repeatingSign = '    ';

const getSpace = (depth) => (repeatingSign.repeat(depth));
const stringify = (value, depth = 0) => {
  if (!_.isObject(value)) {
    return String(value);
  }
  const result = _.keys(value).map((item) => `${getSpace(depth)}    ${item}: ${stringify(value[item], depth + 1)}`);

  return `{\n${result.join('\n')}\n${getSpace(depth)}}`;
};

const getUpdateLine = (sign, value, name, depth) => `${getSpace(depth)}  ${sign} ${name}: ${stringify(value, depth + 1)}`;
const getNewLine = (name, oldValue, newValue, depth) => `${getSpace(depth)}  - ${name}: ${stringify(oldValue, depth + 1)}\n ${getSpace(depth)} + ${name}: ${stringify(newValue, depth + 1)}`;

const iteration = (tree, depth = 0) => {
  const result = tree.map((item) => {
    const {
      name, status, value, oldValue, newValue, children,
    } = item;
    switch (status) {
      case 'unchanged':
        return getUpdateLine(' ', value, name, depth);
      case 'changed':
        return getNewLine(name, oldValue, newValue, depth);
      case 'added':
        return getUpdateLine('+', value, name, depth);
      case 'deleted':
        return getUpdateLine('-', value, name, depth);
      case 'hasChildren':
        return `${getSpace(depth)}    ${name}: ${iteration(children, depth + 1)}`;
      default:
        throw new Error(`Status error ${status}.`);
    }
  });
  return `{\n${result.join('\n')}\n${getSpace(depth)}}`;
};
const stylish = (data) => iteration(data, 0);

export default stylish;
