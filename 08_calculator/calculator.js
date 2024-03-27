const add = function(first, second) {
  return first + second;
};

const subtract = function(first, second) {
  return first - second;
};

const sum = function(arr) {
	if(arr.length === 0) return 0;
  else return arr.reduce((acc, curr) => acc + curr);
};

const multiply = function(arr) {
  if(arr.length === 0) return 0;
  else return arr.reduce((acc, curr) => acc * curr);
};

const power = function(first, second) {
	return Math.pow(first, second);
};

const factorial = function(num) {
	if(num === 0) return 1;
  else{
    let total = 1;
    for(let i = 1;i <= num;i++){
      total *= i;
    }
    return total;
  }
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
