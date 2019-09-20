/* ============ BEFORE YOU GET STARTED ============ */

/* here is a very short function that pops up an alert window that says 'Hello!' */
function hello() {
  alert('Hello!');
}

/* Here's the steps to test it:

- Open index.html in chrome.
- Type the keyboard shortcut `cmd + option + j`. Dev tools should open to the console.
- You should see the message saying 'starter.js is connected!'
- Underneath that, next to the blue arrow, type `hello()` to call the `hello` function
- You should get an alert window that says HELLO!

*/

/* ================= AS YOU COMPLETE EACH STEP ============= */

/* After each step, perform the following commands in the terminal:
1. git add .
2. git commit -m "add completed part PART-NUMBER-HERE"
This will help us track your progress and it will give you practice writing good commit messages!!
*/

/*REMINDER - ANY QUESTION THAT DOES NOT SPECIFICALLY TELL YOU TO ALERT OR PROMPT SHOULD BE LOGGED TO THE CONSOLE*/

/* ++++====+++==++++==+++++======++++===++++++=====+++==++++++++++===== */
/* ======================= WRITE YOUR ANSWERS HERE!!!!! =============== */
/* ++++====+++==++++==+++++======++++===++++++=====+++==++++++++++===== */

// PART 0: Just DO it!!
/*
Write a function called justDoIt() that accepts a string — your name — as an argument. The function should return a string with your argument and the phrase "just do it!"
*/
const justDoIt = (name) => {
  return name.toString();
}

console.log(justDoIt('Steve'));

// PART 1: Big or Small String?
/*
Write a function called bigOrSmallString() that accepts a string as an argument and returns "This word is loooooong!" if the string's length is greater than 10 and "This word is short 😬" otherwise.
*/
const bigOrSmallString = (str) => {
  return str.length > 10 ? `This word is loooooong!` : `This word is short 😬`;
}

console.log(bigOrSmallString('kasdjfhalsdkfjldkfjlksdjflsdkfjalsdfkjh'));
console.log(bigOrSmallString('short'));

// PART 2: Odd or Even String Length?
const oddOrEvenString = (str) => {
  return str.length % 2 === 0 ? `This string's length is TOTALLY even!` : `This string's length is odd...`;
}

console.log(oddOrEvenString('even'));
console.log(oddOrEvenString('short'));


// PART 3: Median
const medianOfArray = (arr) => {
  let sorted = arr.sort((a, b) => a - b);
  return sorted[Math.floor(sorted.length / 2)];
}

console.log(medianOfArray([ 3, 2, 1, 4, 5 ]));

// PART 4: Sum Array
/*
Create a function called sumArray() that takes an array, arr, as an argument and returns the sum of all of the numbers in the array. If the array is empty, return zero.
*/
const sumArray = (arr) => {
  return arr.reduce((acc, cur) => acc + cur);
}

console.log(sumArray([ 3, 2, 1, 4, 5 ]));

// PART 5: Vowel Count
/*
Create a function called vowelCount() that accepts a string, str, as an argument and returns the number of vowels in that string.
*/
const vowelCount = (str) => {
  let count = 0;
  str.toLowerCase().split('').forEach(char => {
    if (char === 'a' || char === 'e' || char == 'i' || char === 'o' || char === 'u') count += 1;
  });
  return count;
}

console.log(vowelCount('beast money'))
// PART 6: Initials



// BONUS: Days of the week



// BONUS: Let's take the Subway



// BONUS: Truth - y & False -y Checker
var arr = [null, 15, 'unicorn', undefined, 7 && false, null || 'hello, world', false && true, 0 || null];




// BONUS: Double X Counter





/* connection checker console log */
console.log('starter.js is connected! Let\'s get to work! 💪');
