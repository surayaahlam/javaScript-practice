/***
 * Task-1: 
Count how many times a string has the letter `a`
*/
const str = "Create a function to calculate the total price after applying a discount.";
let count = 0;

for(let i = 0; i < str.length; i++){
    if (str[i] === "a"){
        count++;
    }
}
// console.log(str);
console.log("The letter `a` appears",count,"times.");



/***
 * Task-2: 
Count how many times a string has the letter `a` or `A`
*/
const str1 = "Animate a button when it's clicked, changing its color and size dynamically."
let count1 = 0;

for(let x = 0; x < str1.length; x++){
    if (str1[x] === "a" || str1[x] === "A"){
        count1++;
    }
}
// console.log(str1);
console.log("The letter `a` or `A` appears",count1,"times.");

/***
 * Task-3: 
Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u` 
*/
const str2 = "Your string goes here."
vowels = ['a', 'e', 'i', 'o', 'u'];
let containsAllVowels = true;

for(let b = 0; b < vowels.length; b++){
    if(!str2.toLowerCase().includes(vowels[b])){
        containsAllVowels = false;
        break;
    }
}

if(containsAllVowels){
    console.log("The string contains all the vowels.");
} 
else {
  console.log("The string does not contain all the vowels.");
}


/***
 * Task-4: 
If a given string has either x, replace x by y. if the given string has X, replace it by Y.

    Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.
* the global flag (/g). replace(/x/g, "y"): Replaces all occurrences of 'x' with 'y'
*/

const str3 = "Xylophones and xylophonists often showcase exceptional skills."

if (str3.includes("x") || str3.includes("X")){
    const replaceStr3 = str3.replace(/x/g, "y").replace("X", "Y");
    console.log(replaceStr3);
}
else{
    console.log("The string doesn't contain `x` or `X` letters.")
}


/***
 * Task-5:
Capitalize Every first Letter of each word in a String
*/
const str4 = "Capitalize every first letter of each word in a string";
const words = str4.split(' ');
const capitalizedWords = [];

for (let i = 0; i < words.length; i++) {
    const capitalized = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    capitalizedWords.push(capitalized);
}

const capitalizedStr4 = capitalizedWords.join(' ');
console.log(capitalizedStr4);

/**
Let's say the word is "example":
    * words[i].charAt(0) gives "e".
    * words[i].charAt(0).toUpperCase() gives "E".
    * words[i].slice(1) gives "xample".
    * Concatenating these ("E" + "xample") results in "Example".
*/