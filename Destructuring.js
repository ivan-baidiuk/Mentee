let obj = {a: {b: {c: {d: 4}}}};
// let obj = {};
// let obj3 = {a: 1, b: 3};
// let arr  = [{a: {b: 3}}]
let arr = [];

let {
  a: {
    b: {
      c: {
        d = 6
      } = {}
    } = {}
  } = {}
} = obj;

// console.log(d)

let [{
  a: {
    b = 11
  } = {}
} = {}] = arr

console.log(b)