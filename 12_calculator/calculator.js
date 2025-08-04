const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numArr) {
	if (numArr == []){
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < numArr.length; i++){
    sum += numArr[i];
  }

  return sum;
};

const multiply = function(numArr) {
  if (numArr == []){
      return 0;
    }

  let result = 1;
  for (let i = 0; i < numArr.length; i++){
    result = result * numArr[i];
  }

  return result;
};

const power = function(num1, num2) {
	let result = 1;
  for (let i = 0; i < num2; i++){
    result = result * num1;
  }
  return result;
};

const factorial = function(num) {
	if (num === 0){
    return 1;
  }

  let factorial = 1;
  for (let i = num; i > 0; i--){
    factorial = i * factorial;
  }
  return factorial;
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
