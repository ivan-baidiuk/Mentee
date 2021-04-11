const checkArray = (input) => {
  return Array.isArray(input);
};

const copyArray = (array) => {
  return [...array];
};

const getFirstArrayElement = (array, counter = 0) => {
  return counter >= 0 ? array.slice(0, counter) : [];
};

const getLastArrayElement = (array, counter = 1) => {
  return counter >= 1 && array.slice(counter * -1);
};

const makeStringFromArray = (array, divider) => {
  return array.join(divider);
};

const student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

const propertiesList = (object) => {
  return Object.keys(object).join("");
};

const removeObjectElement = (object, element) => {
  const copy = { ...object };
  console.log(copy);
  delete copy[element];
  console.log(copy);
  return copy;
};

removeObjectElement(student, "rollno");

const objectSize = (object) => {
  return Object.keys(object).length;
};

const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const bookInfo = () => {
  return library.map((item) => {
    return `Reading status: ${
      item.readingStatus ? "Currently reading" : "Not reading"
    }, ${item.title} by ${item.author}`;
  });
};

console.log(bookInfo());
