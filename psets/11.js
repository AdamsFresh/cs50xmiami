/*
The Age Calculator part 2

Forgot how old you are? Calculate it!

Write a function named calculateAge that:
- takes 2 arguments: birth year, current year.
- calculates the 2 possible ages based on those years.
- outputs the result to the screen like so: "You are either NN or NN"
- Call the function three times with different sets of values.
- Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

// write your solution here...
function calculateAge(birthYear){
  var d = new Date();
  var currentYear = d.getFullYear();
  var currentAge = currentYear - birthYear;
    console.log("You are either " + currentAge+ " or " + (currentAge + 1));
}



calculateAge(1984);

calculateAge(2013);

calculateAge(1985, 2000);
