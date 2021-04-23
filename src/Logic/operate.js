import Big from 'big.js';

const operate = (next, total, operation) => {
  const numOne = next !== null ? new Big(next) : new Big('0');
  const numTwo = total !== null ? new Big(total) : new Big('0');
  const mult = numTwo === '0' ? 1 : numTwo;

  let result = 0;
  switch (operation) {
    case '%':
      if (next === null) {
        result = numTwo.div(100);
        break;
      } else {
        result = numTwo.div(100).mul(numOne);
        break;
      }
    case '/':
      result = mult.div(numOne);
      break;
    case 'X':
      result = numOne.mul(mult);
      break;
    case '+':
      result = numOne.plus(numTwo);
      break;
    case '-':
      result = numTwo.minus(numOne);
      break;
    default:
      result = numOne;
  }
  return result;
};

export default operate;
