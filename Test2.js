const factorial = (n) => {
  if (n < 2) {
    return n;
  }
  return n * factorial(n - 1);
};

// console.log(factorial(5));

function A() {
  return true;
}

function B() {
  return true;
}

let a = new A();
let b = new B();

// console.log(a);
// console.log(b);
// console.log(a === b);

//Impossible

const c = new Map([
  ["one", 1],
  ["two", 2],
  ["three", 3],
  ["three", 3],
  ["two", 2],
]);

const d = new Set([1, 2, 3, 4, 5, 5, 6, 7, 7, 7]);

// console.log(c);
// console.log(d);

const Ivan = { name: "Ivan" };
const Peter = { name: "Ivan" };
const r = new WeakMap();
r.set(Ivan, "Markup");
r.set(Peter, "Developer");

// console.log(r.get(Ivan));
// console.log(r.has(Peter));

function Calculator() {
  this.read = function () {
    this.q = parseInt(prompt("Write q", "0"));
    this.z = parseInt(prompt("Write z", "0"));
    return [this.q, this.z];
  };
  this.sum = function () {
    return this.q + this.z;
  };
  this.mul = function () {
    return this.q * this.z;
  };
}

// const p = new Calculator();

// let read1 = p.read();
// let sum1 = p.sum();
// let mul1 = p.mul();

const findMinimum = (arr) => {
  console.log(`The minimum of [${arr}] is ${Math.min(...arr)}`);
};

findMinimum([18, 5, 7, 24]);

const sum = (num1) => {
  return (num2) => {
    return num1 + num2;
  };
};

// console.log(sum(1)(2));

let counter = 0;
const e = setInterval(() => {
  return counter === 20 ? clearInterval(e) : counter++;
}, 100);

let counter2 = 0;
const f = setTimeout(function g() {
  counter2++;
  return counter2 === 20 ? clearTimeout(f) : setTimeout(g, 100);
}, 100);

function sumArgs() {
  return [].reduce.call(arguments, (acc, reducer) => {
    return acc + reducer;
  });
}

// console.log(sumArgs(1, 2, 3, 4, 5));