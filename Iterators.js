const array = [3, 0, 5, 0, 1, 2, 3, 3];

const uniqueElementsMy = (array) => {
  let result = [];
  array.forEach((item) => {
    if (!result.includes(item)) {
      result.push(item)
    }
  })
  return result;
}

const uniqueElements = (array) => {
  return array.filter((item, index) => {
    return !array.includes(item, index+1)
  })
}

const uniqueElementsBest = (array) => {
  return [... new Set(array)];
}

console.log(uniqueElements(array));

