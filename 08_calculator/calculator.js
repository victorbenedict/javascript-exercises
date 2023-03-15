const add = (a,b) => a + b;

const subtract = (a,b) => a - b;

const sum = (array) => {
  let total = 0; 
  array.forEach(num => {
    total += num;
  });
  return total;
};

const multiply = (array) => {
  let total = 1;
  array.forEach(num => {
    total *= num;
  });
  return total;
};

const power = function(x,y) {
  return x**y;	
};

const factorial = function(num) {
  result = 1;
	for(index = 1; index <= num; index++){
    result *= index;
  }
  return result;
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
