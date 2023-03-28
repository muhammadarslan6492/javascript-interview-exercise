// return true if string palindromes and false if not

// method1
function checkPalindromes(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

// method2
function checkPalindromes2(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

console.log(checkPalindromes2('abbachtre'));
