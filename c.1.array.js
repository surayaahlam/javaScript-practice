/***
 * Declare an array 
1. Declare an array with 5 elements containing fruits
2. console log the 3rd index element
3. change the value of the 2nd index element to jambura
4. console log the final array
*/

var fruits = ['apple', 'banana', 'grape', 'mango', 'coconut'];
console.log(fruits[2]);
fruits[1] = 'jambura';
console.log(fruits);

/***
 * Add or remove elements
1. Declare an array of 3 tourist destinations
2. Add a new tourist destination to your tourist array
3. Add two more to your array
4. Remove the last tourist destination you have added
5. display the final array as output
 */

var destination = ["Bali", "Cox's Bazar", "Sreemangal"];
destination.push("Bandarban");
destination.push("Kuakata", "Giza");
destination.pop();
console.log(destination);

/***
 * Checking Array Membership with ‘includes’
1. Create an array of books containing different book.
2. Use the includes method to check if the array contains a javascript book.
3. Print a message to the console indicating whether the element is present in the array or not.
 */

var books = ["Web Programming Book", "Javascript Book", "UI/UX Design Book"];
console.log(books.includes("Javascript Book"));

/***
 * Checking if it's an Array
1. Create different variables, each containing either an array or a non-array value.
2. Now use isArray to check if each variable is an array.
3. Print a message to the console indicating whether each variable is an array or not.
 */

var age = 27;
var hobby = 'Traveling, Art & Crafts';
var veggies = ['tomato', 'onion', 'carrot'];
var isStudent = true;
var cars = [];
console.log(Array.isArray(age), Array.isArray(hobby), Array.isArray(veggies), Array.isArray(isStudent), Array.isArray(cars));

/***
 * Combining Arrays
1. Create two arrays of your choice.
2. Use the concat method to combine the two arrays into a new array.
3. Print both the original arrays and the combined array using console.log().
 */

var num1 = [5, 6, 7, 8, 9];
var num2 = [1, 2, 3, 4];
num3 = num2.concat(num1);
console.log(num1, num2);
console.log(num3);
