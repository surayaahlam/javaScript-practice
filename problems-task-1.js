// js-problems-part1-practice-tasks

/**
 * Task-1: 
Write a function to convert temperature from Celsius to Fahrenheit.
*/
function celsiusToFahrenheit(celsius){
    let fahrenheit = (celsius * 9 / 5) + 32;
    console.log(celsius,"°C is",fahrenheit,"°F");
    return fahrenheit;
}

const temperature = celsiusToFahrenheit(1);
console.log(temperature);

/**
 * Task-2: 
You are given an array of numbers. Count how many times the a number is repeated in the array. 
* sample-input: 
numbers = [5,6,11,12,98, 5]

find: 5

output: 2

* sample-input: 
numbers = [5,6,11,12,98, 5]

find: 25

output: 0
*/
function countNumber(array, target) {
    let count = 0;
    for (let num of array) {
      if (num === target) {
        count++;  
      }
    }
    return count;
}

let sample = [5,6,11,12,98, 5];
let number = 25;
let result = countNumber(sample, number);
console.log(result,"times the",number,"is repeated in the array",sample);


/**
 * Task-3: 
Write a function to count the number of vowels in a string.
*/
/**function countVowels(str) {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
}
*/
function countVowelsOccurrences(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    };
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            vowelCount[char]++;
        }
    }
    return vowelCount;
}

let input = "A function to count the number of vowels in a string.";
let vowelsInString = countVowelsOccurrences(input);
console.log(vowelsInString);

/**
 * Task-4: 
Write a function to find the longest word in a given string.

* sample-input: 
I am learning Programming to become a programmer

sample-output: Programming
*/
function findLongestWord(str) {
    let words = str.split(' ');
    let longestWord = '';

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
let string = "I am learning Programming to become a programmer";
let longestWord = findLongestWord(string);
console.log(longestWord);


/**
 * Task-5: 
Generate a random number between 10 to 20.
*/
function getRandomNumber10To20() {
    let max = 20;
    let min = 10;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
let randomNum = getRandomNumber10To20();
console.log(randomNum);