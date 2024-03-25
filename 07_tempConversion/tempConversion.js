const convertToCelsius = function(temperatureF) {
  let temperatureC = (temperatureF - 32) * (5/9);
  if(Number.isInteger(temperatureC)){
    return temperatureC;
  }

  return Math.round(temperatureC * 10)/10;
};

const convertToFahrenheit = function(temperatureC) {
  let temperatureF = temperatureC * (9/5) + 32;
  if(Number.isInteger(temperatureF)){
    return temperatureF;
  }

  return Math.round(temperatureF * 10)/10;
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit
};
