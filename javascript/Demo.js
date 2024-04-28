<<<<<<< HEAD
// title : Built -in functions
//Author :Ramapraba J
//Create date:20-03-2024
=======
>>>>>>> 4975942f3b08c68e9345c15afcdefa639c9bab11
const empName = ["John", "Sandy", "Raj", "Kumar"];
console.log("-----------Pop function------------");
console.log(empName.pop());
console.log(empName);
console.log("\n");
console.log("-----------Push function------------");
empName.push("Ram");
console.log(empName);
console.log("\n");
console.log("-----------Array length--------------");
let len=empName.length;
console.log(len);
console.log("\n");
console.log("-----------Map Function---------------");
let numbers = [2, 4, 6, 8, 10];
function square(number) {
  return number * number;
}
let square_numbers = numbers.map(square);
console.log(square_numbers);
let sortedArray=square_numbers.sort();
console.log("\n");
console.log("-----------Sorted Array--------------");
console.log(sortedArray);
console.log("\n");
console.log("-----------Reverse function------------");
console.log(numbers.reverse());
console.log("\n");
console.log("-----------filter function------------");
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function checkEven(number) {
  if (number % 2 == 0)
    return true;
  else
    return false;
}
let evenNumbers = num.filter(checkEven);
console.log(evenNumbers);
console.log("\n");
console.log("-----------find function------------");
let number = [1, 3, 4, 9, 8];
function isEven(element) {
  return element % 2 == 0;
}
let evenNumber = number.find(isEven); 
console.log(evenNumber);
console.log("\n");
console.log("-----------findIndex function------------");
let index=number.findIndex(isEven);
console.log(index);
console.log("\n");
console.log("-----------setTimeout function------------");
function greet() {
    console.log('Hello, world!');
}
setTimeout(greet, 2000);








