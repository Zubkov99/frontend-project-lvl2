import _ from 'lodash';
import convertObjInStr from './convertObjInStr.js';

const getDifferences = (obj1, obj2) => {
  const transitionalBox = {};
/* eslint-disable */
  const result = _.transform(obj1, (storage, value, key) => {
    _.map(obj2, (innerValue, innerKey) => {
      if (_.isEqual(key, innerKey) && _.isEqual(value, innerValue)) {
        transitionalBox[key] = value;
        return storage[`  ${key}`] = value;
      }
      if (_.isEqual(key, innerKey) && !_.isEqual(value, innerValue)) {
        transitionalBox[key] = value;
        storage[`  - ${key}`] = value;
        return storage[`  + ${innerKey}`] = innerValue;
      }
    });
    return storage;
  }, {});

  const addUniqueKeys = (obj, sign) => {
    _.map(obj, (value, key) => {
      if (!_.has(transitionalBox, key)) {
        transitionalBox[key] = value;
        result[`  ${sign} ${key}`] = value;
      }
    });
  };

  addUniqueKeys(obj1, '-');
  addUniqueKeys(obj2, '+');
  return convertObjInStr(result);
};

export default getDifferences;
