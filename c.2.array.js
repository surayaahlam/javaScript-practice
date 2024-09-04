// array-looping-tasks

/**
 * Task 1
Write a JavaScript code to reverse the array colors `without using the reverse method`.
*/
// Input:
const colors = ['red', 'blue', 'green', 'yellow', 'orange']

const reverseColors = [];
for (let i = colors.length-1; i >= 0; i--){
    reverseColors.push(colors[i]);
}
console.log(reverseColors);


/**
 * Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.
*/
// Input:
const numbers = [12, 98, 5, 41, 23, 78, 46];

const evenNumbers = [];
for (num of numbers){
    if (num % 2 === 0){
        evenNumbers.push(num);
    }
}
console.log(evenNumbers);

/**
 * Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.
*/
// Input:
var array = ['Tom', 'Tim', 'Tin', 'Tik']

let concatenatedStr = "";
for (let value of array){
    concatenatedStr += value;
}
console.log(concatenatedStr);

// console.log(array.join(""));

/**
 * Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output
*/
// Input:
const statement = 'I am a hard working person'

const words = statement.split(" ");
let reverseWord = [];
for (word of words){
    reverseWord.unshift(word); 
}
const reversedStr = reverseWord.join(" ");
console.log(reversedStr);

// reversed = statement.split(" ").reverse().join(" ");
// console.log(reversed);

