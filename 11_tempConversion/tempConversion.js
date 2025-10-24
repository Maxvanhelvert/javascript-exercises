const convertToCelsius = function(far) {
  let celcius = (far - 32) / (9/5);
  let roundedC = Math.round(celcius * 10) / 10;
  return roundedC
};

const convertToFahrenheit = function(cel) {
  let farenheit = cel * (9/5) + 32; 
  let roundedF = Math.round(farenheit * 10) / 10;
  return roundedF
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
