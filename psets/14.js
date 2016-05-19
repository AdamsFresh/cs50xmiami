/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

Create a function called celsiusToFahrenheit:
- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".

Create a function called fahrenheitToCelsius:
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/

// write your solution here...
function celsiusToFahrenheit(c){
  var converetedFahrenheitTemp = ((c * 9)/5) + 32;

    console.log(c + "°C is " + converetedFahrenheitTemp + "°F");
}


celsiusToFahrenheit(23);

function fahrenheitToCelsius(f){
  var convertedCelsiusTemp = ((f - 32) * 5) / 9;
    console.log(f + "°F is "+ convertedCelsiusTemp + "°C.");
}

fahrenheitToCelsius(96);
