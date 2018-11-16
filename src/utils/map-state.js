import { toPairs } from 'ramda';

export default selectors => (...args) => {
  return toPairs(selectors).reduce((acc, [key, selector]) => {
    acc[key] = selector(...args);
    return acc;
  }, {});
};
