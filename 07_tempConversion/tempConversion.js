const convertToCelsius = function(fahrenheitNumber) {
  let celsiusNumber = ((fahrenheitNumber - 32) * (5/9));
  return Math.round(celsiusNumber * 10) / 10;
};

const convertToFahrenheit = function(celsiusNumber) {
  let fahrenheitNumber = (celsiusNumber * (9/5) + 32);
  return Math.round(fahrenheitNumber * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
