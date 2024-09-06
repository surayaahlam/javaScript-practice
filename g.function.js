// Simple function Related Practice Tasks

/**
 * Task-1  
Take four parameters. Multiply the four numbers and then return the result
 */
function multiply(a, b, c, d){
    console.log("Multiplication of",a, b, c, d,"is:")
    multi = a * b * c * d;
    return multi;
}

let multiply4Num = multiply(4, 5, 7, 9);
console.log(multiply4Num);

/**
 * Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */
function Number(num){
    if (num % 2 === 1){
        console.log(num,"is odd. So multiplying it by 2");
        multiOdd = num * 2;
        return multiOdd;
    }
    else{
        console.log(num,"is even. So dividing it by 2");
        divideEven = num / 2;
        return divideEven;
    }
}

let num = 14;
evenOdd = Number(num);
console.log(evenOdd);

/**
 * Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */
function make_avg(array, length){
    let sum = 0;
    for (numBer of array){
        sum = sum + numBer;
    }
    console.log("Average of", array,"is:")
    average = sum / length;
    return average;
}

let numbers = [1, 2, 6, 7, 12, 15, 19, 45, 0, 5];
average = make_avg(numbers, numbers.length);
console.log(average);

/**
 * Task-4  
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 */
function count_zero(binaryString){
    let count = 0;
    for (number of binaryString){
        if (number == 0){ // number === "0" or number == 0
            count++;
        }
    }
    console.log(binaryStr,"in this string there are total 0's:")
    return count;
}

let binaryStr = "010001000111101101"
zerosInStr = count_zero(binaryStr);
console.log(zerosInStr);
/**
 * Task-5 
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return `Even`. If odd return `Odd`
 */

function odd_even(int){
    if (int % 2 === 0){
        return `Even`;
    }
    else{
        return `Odd`;
    }
}

let intNumber = 6;
oddEven = odd_even(intNumber);
console.log(oddEven);