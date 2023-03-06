const convertToCelsius = function(F) {
  temp = (F-32) * (5 / 9);
  if(Number.isInteger(temp)){ return temp;}
  else{ return Number.parseFloat(temp.toFixed(1));}
};

const convertToFahrenheit = function(C) {
  temp = C * (9 / 5) + 32;
  if(Number.isInteger(temp)){ return temp;}
  else{ return Number.parseFloat(temp.toFixed(1));}
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
