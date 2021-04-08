const loopFactorial = (n) => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

const recursionFactorial = (n) => {
  return (n === 1) ? n : n * recursionFactorial(n - 1)
}

const loopRange = (x, y) => {
  let range = [];
  while (x < y - 1) {
    range.push(x + 1);
    x++;
  }
  return range;
}

const recursionRange = (x, y) => {
  if (y - x === 2) {
    return [x + 1];
  }
  const array = recursionRange(x, y - 1 );
  array.push(y - 1);
  return array;
}

const loopFibonacci = (n) => {
  let list = [0, 1];
  let previous = 0;
  let current = 1;
  for (let i = 0; i < n - 2; i++) {
    [previous, current] = [current, previous + current]
    list.push(current);
  }
  return list;
}

const loopFibonacciNew = (n) => {
  let list = [0, 1];
  let previous = 0;
  let current = 1;
  let template;
  while (n > 2) {
    template = current;
    current = current + previous;
    previous = template;
    list.push(current);
    n--;
  }
  return list;
}

const recursionFibonacci = (n) => {
  if (n === 2) {
    return [0, 1];
  }
  const array = recursionFibonacci(n - 1);
  array.push(array[array.length - 1] + array[array.length - 2]);
  return array;
}