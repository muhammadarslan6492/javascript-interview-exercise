// write a function that reverse string example abc reverse into cba

// method 1
function reverseSrt1(str) {
  const reverse = str.split('').reverse().join('');
  return reverse;
}

// method 2

function reverseSrt2(str) {
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed;
  }
  console.log(reversed);
  return reversed;
}

// method 3
function reverseSrt3(str) {
  return str.split('').reduce((reversed, char) => {
    return char + reversed;
  }, '');
}

console.log(reverseSrt3('abc'));
