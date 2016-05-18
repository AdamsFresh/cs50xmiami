/*
The Temperature Converter

It's hot out! Let's make a converter based on the steps here:
http://www.mathsisfun.com/temperature-conversion.html

- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."
*/
 var celsiusTemp = 98,
      converetedFahrenheitTemp = ((celsiusTemp * 9)/5) + 32,
      fahrenheitTemp = 100,
      convertedCelsiusTemp = ((fahrenheitTemp - 32) * 5) / 9;

      console.log("°C " + celsiusTemp + " is " + converetedFahrenheitTemp + " °F");
      console.log(fahrenheitTemp + "°F is " + convertedCelsiusTemp + "°C.")


// write your solution here...
