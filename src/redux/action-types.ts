const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const RESET = 'RESET';

const createActionTypes = (base: string): object => {
  const res = {};
  [REQUEST, SUCCESS, FAILURE, RESET].forEach((type) => {
    res[type] = `${base}_${type}`;
  });
  return res;
};

export default createActionTypes;
