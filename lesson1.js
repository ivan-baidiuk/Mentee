const a = { a: 1, b: 2 };
const b = { b: 2, a: 1 };

let compareObj = (objA, objB) => {
  const SizeA = Object.keys(objA).length;
  const SizeB = Object.keys(objB).length;
  let compared = 0;
  if (SizeA === SizeB) {
    for (const property in objA) {
      if (objA.hasOwnProperty(property) && objA[property] === objB[property]) {
        compared++;
      }
    }
    console.log(SizeA === compared);
  } else {
    console.log(false);
  }
};

function compareObj2(objA, objB) {
  console.log(JSON.stringify(objA) === JSON.stringify(objB));
}

compareObj(a, b);
compareObj2(a, b);
