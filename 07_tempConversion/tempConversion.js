const convertToCelsius = function(far) {
  let tempCel = Math.round(((far - 32)*5/9) * 10) /10;
  return tempCel;
};

const convertToFahrenheit = function(cel) {
  let tempFar = Math.round((cel * 9/5 + 32) * 10) / 10;
  return tempFar; 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
