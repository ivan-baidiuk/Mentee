const welcomeUser = () => {
  const name = prompt("Enter your name!");
  const surname = prompt("Enter your surname!");
  const upperName = name[0].toUpperCase() + name.slice(1);
  const upperSurname = surname[0].toUpperCase() + surname.slice(1);

  alert(`Hello ${upperName} ${upperSurname}`);
}

const compareStrings = () => {
  const password = prompt("Enter your password!");
  const confirmPassword = prompt("Confirm your password!");

  alert(password === confirmPassword ? 'Password validated' : 'Password do not match');
}

const stringLength = () => {
  const str = prompt("Enter your string!");

  alert(`${str} length is ${str.length}`);
}

const stringReverse = () => {
  const str = prompt("Enter your string!");

  alert(`${str} reversed is ${str.split('').reverse().join('')}`)
}

const DrEvil = (amount) => {
  return amount === 1e6 ? `${amount} dollars (pinky)` : `${amount} dollars`;
}

const mixUp = (stringOne, stringTwo) => {
  if (stringOne.length <= 2 || stringTwo.length <= 2) {
    return false;
  }
  const stringOneChanged = stringTwo.substr(0, 2) + stringOne.slice(2);
  const stringTwoChanged = stringOne.substr(0, 2) + stringTwo.slice(2);

  return `${stringOneChanged} ${stringTwoChanged}`;
}

const verbing = (str) => {
  if (str.length < 3) {
    return str;
  } else if (str.endsWith("ing")) {
    return str + 'ly'
  } else {
    return str + 'ing';
  }
}

const notBad = (badString) => {
  if (badString.includes("not") && badString.indexOf("bad") > badString.indexOf("not")) {
    return badString.slice(0, badString.indexOf("not")) + 'good!'
  }
  return badString;
}