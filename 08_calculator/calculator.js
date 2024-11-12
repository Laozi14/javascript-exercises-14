const add =(a,b) => a+b;

const subtract = (a,b) => a-b;

const sum = (array) => array.reduce((acc, num) => acc + num, 0);


const multiply = (array) => array.reduce((acc,num) => acc * num, 1);

const power = (a,b) => a ** b;

const factorial = (n) => n === 0 ? 1 : n * factorial(n - 1);


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
