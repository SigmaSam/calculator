import operate from './operate';

const calculate = (data, name) => {
  const { total, next, operation } = data;

  if (name === '+/-') {
    return {
      next: `${next * (-1)}`,
      operation,
      total,
    };
  }

  if (name === '%') {
    return {
      total: `${operate(next, total, operation)}`,
      next: null,
      operation: '%',
    };
  }

  if (name === '/') {
    return {
      total: `${operate(next, total, operation)}`,
      operation: '/',
      next: '',
    };
  }

  if (name === 'X') {
    return {
      total: `${operate(next, total, operation)}`,
      next: '0',
      operation: 'X',
    };
  }

  if (name === '+') {
    return {
      total: `${operate(next, total, operation)}`,
      next: '0',
      operation: '+',
    };
  }

  if (name === '-') {
    return {
      total: `${operate(next, total, operation)}`,
      next: '0',
      operation: '-',
    };
  }

  if (name === '=') {
    return {
      next: `${operate(next, total, operation)}`,
      operation: '=',
      total,
    };
  }

  if (next === null) {
    return {
      next: parseFloat(`${name}`, 10),
      operation,
      total,
    };
  }

  if (next === 'AC') {
    return { total: null, next: null, operation: null };
  }

  return { next: parseFloat(`${next}${name}`, 10), operation, total };
};

export default calculate;
