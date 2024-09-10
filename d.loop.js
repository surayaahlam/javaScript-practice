//  break

/* 
Write a loop 1 to 200. Use break to exit the loop once you find 100.
*/
let i = 1;
while(i <= 200){
    console.log(i);
    if (i === 100){
        break;
    }
    i++;
}

console.log('1.............................');

/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let a = 1;
let sum = 0;
while(a < 100){
    sum = sum + a;
    console.log(a, sum);
    if (sum >= 100){
        break;
    }
    a++;
}
console.log("The final sum is:", sum);
console.log("The loop stopped after adding the number:", a);

console.log('2.............................');

/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
let b = 1;
while(b <= 100){
    if((b * b) % 1 === 0){
        console.log("The first square number encountered is:", b);
        break;
    }
    b++;
}

console.log('3.............................');

// continue 

/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/
for (i = 1; i <= 40; i++){
    if (i % 2 !== 0){
        continue;
    }
    console.log(i);
}

console.log('4.............................');

/*
Display odd number from 55 to 85 and skip the numbers divisible by 5.
*/
for (i = 55; i <= 85; i++){
    if (i % 5 === 0){
        continue;
    }
    console.log(i);
}

console.log('5.............................');

// for-loop

/**
"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
 */
for (i = 0; i < 60; i++){
    console.log("I will invest at least 6 hrs every single day for next 60 days!");
}

console.log('6.............................');

/**
Find all the odd numbers from 61 to 100.
*/
console.log("Odd numbers from 61 to 100:")
for (i = 61; i <= 100; i+=2){
    console.log(i);
}

console.log('7.............................');

/**
Find all the even numbers from 78 to 98.
*/
console.log("Even numbers from 78 to 98:")
for (let x = 78; x <= 98; x+=2){
    console.log(x);
}

console.log('8.............................');

/**
Display sum of all the odd numbers from 91 to 129.
*/
let summation = 0;
for (i = 91; i <= 129; i+=2){
    console.log(i);
    summation = summation + i;
}
console.log("Sum of all the odd numbers from 91 to 129:", summation);

console.log('9.............................');

/**
Display sum of all the even numbers from 51 to 85.
*/
let Sum = 0;
for (i = 51; i <= 85; i++){
    if (i % 2 === 0){
        console.log(i);
        Sum = Sum + i;
    } 
}
console.log("Sum of all the even numbers from 51 to 85:", Sum);

console.log('10.............................');

/**
Generate a multiplication table for number 9
*/
const tableOf = 9;
console.log("A multiplication table for number 9:");
for(i = 1; i <= 10; i++){
    let multi = i * tableOf;
    console.log(tableOf,"x",i,"=",multi);
}

console.log('11.............................');

/**
Implement a countdown timer that counts down from 81 to 65.
*/
for(i = 81; i >= 65; i--){
    console.log(i);
}

console.log('12.............................');

// while-loop

/**
"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
 */
let c = 0;
while (c < 60){
    console.log("I will invest at least 6 hrs every single day for next 60 days!");
    c++;
}

console.log('13.............................');

/**
Find all the odd numbers from 61 to 100.
*/
let d = 61;
console.log("Odd numbers from 61 to 100:")
while(d <= 100){
    console.log(d);
    d+=2;
}

console.log('14.............................');

/**
Find all the even numbers from 78 to 98.
*/
let x = 78;
console.log("Even numbers from 78 to 98:")
while(x <= 98){
    console.log(x);
    x+=2;
}

console.log('15.............................');

/**
Display sum of all the odd numbers from 81 to 131.
*/
let e = 81;
let Summation = 0;
while(e <= 131){
    console.log(e);
    Summation = Summation + e;
    e+=2;
}
console.log("Sum of all the odd numbers from 81 to 131:",Summation);

console.log('16.............................');

/**
Display sum of all the even numbers from 206 to 311.
*/
let f = 206;
let summ = 0;
while(f <= 311){
    console.log(f);
    summ = summ + f;
    f+=2;
}
console.log("Sum of all the even numbers from 206 to 311:",summ);

console.log('17.............................');

/**
As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5
*/
let g = 1;
const table = 5;
console.log("A multiplication table for number 5:")
while(g <= 10){
    let multi = g * table;
    console.log(table,"x",g,"=",multi);
    g++;
}

console.log('18.............................');

/**
Implement a countdown timer that counts down from 21 to 15.
*/
let h = 21;
while(h >= 15){
   console.log(h);
   h--;
}

console.log('19.............................');


