/***
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

var burger = 300;

if(burger > 500){
    console.log('Free Coke');
}
else{
    var coke = 30;
    console.log("Coke is",coke,"tk");
}

/*** 
BMI Calculator and Health Category:
Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.
    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
*/

var weight = 52;
var height = 1.563;
var BMI = weight / (height ** 2);

if (BMI < 18.5){
    console.log('Underweight');
}
else if(BMI >= 18.5 && BMI <= 24.9){
    console.log('Normal');
}
else if(BMI >= 25 && BMI <= 29.9){
    console.log('Overweight');
}
else {
    console.log('Obese');
}

/***
Grade Calculator:
Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:
    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59
***/

var Mark = 64;

if (Mark >= 90 && Mark <=100){
    console.log('Grade is A');
}
else if(Mark >= 80 && Mark <=89){
    console.log('Grade is B');
}
else if(Mark >= 70 && Mark <= 79){
    console.log('Grade is C');
}
else if(Mark >= 60 && Mark <= 69){
    console.log('Grade is D');
}
else {
    console.log('Grade is F');
}

/***
if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

var yourMark = 70;
var friendMark = 60;

if (yourMark >= 80){
    if(friendMark >= 80){
        console.log('Going for Lunch.');
    }
    else if (friendMark >= 60 && friendMark < 80){
        console.log('Good Luck, Next Time.');
    }
    else if (friendMark >= 40 && friendMark < 60){
        console.log('Message Unseen');
    }
    else{
        console.log('Block');
    }
}
else{
    console.log('Go to home and Sleep and Act sad');
}

/***
you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.
 */

var num1 = 80;
var num2 = 60;
var result;

if (num1 > num2){
    result = num1 * 2;
    console.log(result);
}
else{
    result = num1 + num2;
    console.log(result);
}

// Ternary
result = num1 > num2 ? num1 * 2 : num1 + num2;
console.log(result);

/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

var age = 9;
var ticketFare = 800;
var discount;

if (age < 10){
    console.log("Ticket is Free.");
}
else if (age > 10 && age <= 30){
    discount = ticketFare * 50 / 100;
    ticketFare = ticketFare - discount;
    console.log("Student gets a 50% discount. Ticket Fare is", ticketFare);
}
else if (age >= 60){
    discount = ticketFare * 15 / 100;
    ticketFare = ticketFare - discount;
    console.log("Senior Citizens gets a 15% discount. Ticket Fare is", ticketFare);
}
else{
    console.log("Ticket Fare is", ticketFare);
}