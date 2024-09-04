/***
Generate a multiplication table for number 9
*/
const tableOf = 9;
console.log("A multiplication table for number 9:");
for(let i = 1; i <= 10; i++){
    let multi = i * tableOf;
    console.log(tableOf,"x",i,"=",multi);
}