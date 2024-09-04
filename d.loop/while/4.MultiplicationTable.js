/***
As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5
*/

let i = 1;
const tableOf = 5;
console.log("A multiplication table for number 5:")
while(i <= 10){
    let multi = i * tableOf;
    console.log(tableOf,"x",i,"=",multi);
    i++;
}