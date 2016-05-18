/*

MixUp

Create a function called mixUp. It should take in two strings,
and return the concatenation of the two strings (separated by a space) slicing out
and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.

For example:
  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

function mixUp(a, b) {
  // write your solution here...

  var firstWordfirstLetters = a.substring(0,2),
      secondWordfirstLetters = b.substring(0,2),
      firstWordremLetters = a.slice(2),
      secondWordremLetters = b.slice(2);

      console.log(secondWordfirstLetters + firstWordremLetters + " " + firstWordfirstLetters + secondWordremLetters);

}

mixUp('Adams', 'Fontin');
