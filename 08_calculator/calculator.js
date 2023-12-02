const add = function(a, b) {
	let sum = a + b;
  return sum;
};

const subtract = function(a, b) {
  let difference = a - b;
  return difference;
};

const sum = function(a) {
  return a.reduce((total, current) => total + current, 0);
}

const multiply = function(a) {
  return a.reduce((total, current) => total * current);
// Not the best solution because if there's an empty array, then the result is undefined since there is no initial value defined
}

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(a) {
  let factorialResult = 1;
	while (a > 0) {
    factorialResult *= a
    a--;
  }
  return factorialResult;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
