function Calculator (a, b) {
  this.a = a;
  this.b = b;
  this.sum = function () {
    return this.a + this.b;
  }
  this.mul = function () {
    return this.a * this.b;
  }
}

let s1 = new Calculator(2, 5);

let sums1 = s1.sum();
let muls1 = s1.mul();

/*=================================*/
const sum = (a) => (b) =>  b ? a + b : a;

let s2 = sum(5)();
let s3 = sum(1)(2);

/*=================================*/
const arr = [1, 2, 3, 4, 5, 6, 7];

const inBetween = (start, end) => {
  return (item) => {
    return item >= start && item <= end;
  }
}
const inArray = (testArray) => {
  return (item) => {
     return testArray.includes(item);
  }
}

const filtered = arr.filter((item) => {
  return item > 5;
})

console.log(arr.filter(inArray([2, 4])));

/*=================================*/
const users = [
  {
    name: 'John',
    age: 20,
    surname: 'Johnson',
  },
  {
    name: 'Pete',
    age: 18,
    surname: 'Peterson',
  },
  {
    name: 'Ann',
    age: 19,
    surname: 'Hathaway',
  },
]

const byField = (field, desc) => {
  return (a, b) => {
    if (desc) {
      return a[field] < b[field] ? 1 : -1;
    }

    return a[field] > b[field] ? 1 : -1;
  }
}