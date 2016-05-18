/*
The Geometrizer

Calculate properties of a circle, using the definitions here:
http://math2.org/math/geometry/circles.htm

- Store a radius into a variable.
- Calculate the circumference based on the radius, and output "The circumference is NN".
- Calculate the area based on the radius, and output "The area is NN".
*/
var radius = 4,
    circumferenceCircle = 2 * Math.PI * radius;
    areaCircle = Math.PI * Math.sqrt(radius);


    console.log("The circumference is " + circumferenceCircle);
    console.log("The area is " + areaCircle);
// write your solution here...
