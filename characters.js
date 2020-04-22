/* 
Write a function called "countAllCharacters".

Given a string of characters, "countAllCharacters" returns an object where each key is a character in the given string, 
with its value being how many times that character appeared in the given string.

 If given an empty string, your function should return an empty object.
*/

// 1 input - string of characters
function countAllCharacters(string) {
  //if string is empty, return an empty object
  if(string === '') {
      return {}
  }
  //result object 
  var counts = {}

 //iterate through the string using for loop
 for (var i = 0; i < string.length; i++) {
    //create an alias
    var currentChar = string[i];
    //check if the current character is in the result object
    if (counts[currentChar] === undefined) {
        //if it's not in result object, give it a value of 1
        counts[currentChar] = 1;
    }else {
        //otherwise, increment the character
        counts[currentChar]++;
    }
 }// return the result object
 return counts;
}

//testing our function by calling it

var result1 = countAllCharacters('JavaScript');
console.log(result1); // --> { J: 1, a: 2, v: 1, S: 1, c: 1, r: 1, i: 1, p: 1 t: 1 }

var result2 = countAllCharacters('');
console.log(result2); // --> {}

