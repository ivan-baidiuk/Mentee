// const factorial = (n) => {
//   if (n < 2) {
//     return n;
//   }
//   return n * factorial(n - 1);
// };
//
// console.log(factorial(5));

// function A() {
//   return true;
// }
//
// function B() {
//   return true;
// }
//
// let a = new A();
// let b = new B();
// console.log(a);
// console.log(b);
// console.log(a === b);

//Impossible

// const c = new Map([
//   ["one", 1],
//   ["two", 2],
//   ["three", 3],
//   ["three", 3],
//   ["two", 2],
// ]);
//
// const d = new Set([1, 2, 3, 4, 5, 5, 6, 7, 7, 7]);
//
// console.log(c);
// console.log(d);

let e = setTimeout(() => {
  console.log(1);
}, 100);

let counter = 0;
let b = setInterval(() => {
  while (counter < 5) {
    clearInterval()
  }
  counter++;
  console.log(counter);
}, 100);
