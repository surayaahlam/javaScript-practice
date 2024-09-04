/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/
let i = 1;
while(i <= 100){
    if((i * i) % 1 === 0){
        console.log("The first square number encountered is:", i);
        break;
    }
    i++;
}
