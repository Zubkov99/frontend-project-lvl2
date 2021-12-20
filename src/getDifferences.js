import _ from 'lodash';

const getDifferences = (obj1, obj2) => {

    const transitionalBox = {};

    const result = _.transform(obj1, (result, value, key) => {
        _.map(obj2, (innerValue, innerKey) => {
            if( _.isEqual(key, innerKey) && _.isEqual(value, innerValue)) {
                transitionalBox[key] = value;
              return result[`  ${key}`] = value;
            }
            if(_.isEqual(key, innerKey) && !_.isEqual(value, innerValue)) {
                transitionalBox[key] = value;
                result[`  - ${key}`] = value;
               return result[`  + ${innerKey}`] = innerValue;                
            }
        })
        return result
      }, {})

      const addUniqueKeys = (obj, sign) => {
        _.map(obj, (value, key) => {
            if(!_.has(transitionalBox, key)) {
              transitionalBox[key] = value;
              result[`  ${sign} ${key}`] = value;
            }
        })
      };

      addUniqueKeys(obj1, '-')
      addUniqueKeys(obj2, '+')

      const convertObjInStr = (obj) => {
        let str = '{';
        for (const [key, value] of Object.entries(obj)) {
          str += `\n${key}: ${value}`;
        }
        return str + '\n}'
      }

    return convertObjInStr(result);
};

export default getDifferences;