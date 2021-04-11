const PalindromeNumber = -1001;

const PalindromeChecker = (elem) => {
  return elem === parseInt(elem.toString().split("").reverse().join(""));
};

console.log(PalindromeChecker(PalindromeNumber));
