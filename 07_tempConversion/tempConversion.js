const convertToCelsius = function(F) { 
    let C = 5/9 * (F - 32);
    return Math.round (C * 10) / 10;
};

const convertToFahrenheit = function(C) {
    F = (C * 9/5) + 32;
    return Math.round (F * 10) / 10;
};



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
