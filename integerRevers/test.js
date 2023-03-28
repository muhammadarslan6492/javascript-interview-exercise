// reverse integer
// 123 to 321
// -12 to -21

function reversInt(n) {
  return parseInt(n.toString().split('').reverse().join('') * Math.sign(n));
}

console.log(reversInt(456));
