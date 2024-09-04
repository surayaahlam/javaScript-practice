/**
 * Task-1
You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.
*/

var iHave = 1000;
var applesOranges = 700;
var willReturn = iHave - applesOranges;

console.log(willReturn);

/**
 * Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.
*/

var math = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.50;

var total = math + biology + chemistry + physics + bangla;
var average = total / 5;

console.log(average.toFixed(2));

/**
 * Task-3
You task is to divide the given number by 5 and show the remainder as the output.
*/

var given = 119;
var answer = given % 5;
console.log(answer);

/**
 * Task-4
What will be the result of the following codes:
*/

var a = isNaN('11');
var b = isNaN(2-10);

console.log(a);
console.log(b);

/**
 * The string '11' is a numeric string, meaning it can be converted to the number 11. Since '11' can be coerced into a number, isNaN('11') returns false. Therefore, a is false.
 
 * The expression 2 - 10 evaluates to -8, which is a valid number. Since -8 is a number, isNaN(2-10) returns false. Therefore, b is false.
 
 * So, both a and b are false because the values passed to isNaN() are either numbers or can be converted into numbers.
*/

