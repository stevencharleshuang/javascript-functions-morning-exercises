| Title | Type | Duration | Author |
| -- | -- | -- | -- |
| Functions | Lab | 1:00 | Rachel Moskowitz (adapted from SEI) |


# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Functions Morning Exercises

## Instructions

Write all of your answers in the `starter.js` file. For some exercises, you'll have to run this script on a web browser as opposed to using `node` because they'll ask you to use alerts and prompts. Instructions on how to do this are in `starter.js`.

Test early, test often. Remember: You can use `node` for that by typing `node starter.js` in your terminal.

You may have to dig into documentation for some of these exercises.

### Part 0: Just Do It

Write a function called `justDoIt()` that accepts a string — your name — as an argument. The function should return a string with your argument and the phrase "just do it!"

```javascript
// example usage
justDoIt('Zack'); // => "Zack, just do it!"
```

### Part 1: Big String or Small String

Write a function called `bigOrSmallString()` that accepts a string as an argument and returns "This word is loooooong!" if the string's length is greater than 10 and "This word is short 😬" otherwise.

### Part 2: Odd or Even String Length

Write a function called `oddOrEvenString()` that accepts a string as an argument and returns "This string's length is odd..." if the length is an odd number and "This string's length is TOTALLY even!" if the string length is even.

### Part 3: Median

Write a function called `medianOfArray()` that takes an **array** as an argument and returns the **median** number in an array.

Have you found the median of an array before?

> **Hint**: Use some type of sorting method to put the values in order first, then access the median element using the length of the array. We'll go over arrays in depth during the next lesson, but see if you can find some array methods to accomplish what you need.

### Part 4: Sum Array

Create a function called `sumArray()` that takes an array, `arr`, as an argument and returns the sum of all of the numbers in the array. If the array is empty, return zero.

### Part 5: Vowel Count

Create a function called `vowelCount()` that accepts a string, `str`, as an argument and returns the number of vowels in that string.

> **Hint**: Remember string methods? Use them.

### Part 6: Initials

Write a function called `initials()` that accepts a person's name as an argument and returns their initials.
  - It should work both with and without a provided middle name.

```javascript
initials('Neil Patrick Harris'); // => NPH
initials('Toni Morrison'); // => TM
```


## Bonus

###  Days of the Week :date:

Write a JavaScript **`switch`** statement that prompts the user to specify what day it is today.
> How do you create a pop-up prompt in the browser? Google might know. 🙃

- If it's Monday, display an alert box with the message "Energize!"
- If it's Tuesday, display an alert box with the message "Just getting started!"
- If it's Wednesday, display an alert box with the message "Halfway through!"
- If it's Thursday, display an alert box with the message "Almost there!"
- If it's Friday, Saturday, or Sunday, display an alert box with the message "Weeeeeee!"
- If it's not any of the above, display an alert box with the message "Huh? Sorry, didn't get that."

###  Let's Take the Subway :station:
Write JavaScript code that would execute the steps below.

1. When the script is run, a menu should be prompted displaying:
    - A list of three trains: the (L) train, the (N) train, the (S)ix train.
    - A message asking the user to make their selection.

2. Then...
    - If the user enters `L`:
        - An **alert box** should display a message containing the user's selection labeled as "L train," along with the following stops:
          - 8th Ave
          - 6th Ave
          - Union Square
          - 3rd Ave
          - 1st Ave
          - Bedford Ave
    - If the user enters `N`:
        - An **alert box** should display a message containing the user's selection labeled as "N train," along with the following stops:
          - Times Square
          - Herald Square
          - 28th St
          - 23rd St — DAPS Nexus
          - Union Square
          - 8th St
    - If the user enters `S`:
        - An **alert box** should display a message containing the user's selection labeled as "S train," along with the following stops:
          - Grand Central
          - 33rd St
          - 28th St
          - 23rd St
          - Union Square
          - Astor Place
3. Finally, a "Thank you!" message should be displayed.
4. The program then exits.

> **Hint**: Maybe you need a `switch` statement, or maybe you need a function. You choose. 😉

###  Truthy or Falsey Checker

Create a function called `truthyFalsey()` that accepts an array, `arr`, as an argument (provided in the starter folder), goes through it, and **logs on the console** whether each value is `true` or `false`.

###  Double X Counter

Write a function called `countXx()` that counts the number of "xx" in a given string. We'll say that overlapping is allowed, so "xxx" contains two "xx."

```javascript
  countXx('abcxx'); // => 1
  countXx('xxx'); // => 2
  countXx('xxxx'); // => 3
```
