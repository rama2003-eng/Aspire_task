var numbers = [1, 2, 3, 4, 5];
var fruits = ["apple", "banana", "orange"];
console.log(numbers[0]);
console.log(fruits[1]);
numbers[2] = 10;
console.log(numbers);
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit);
}
console.log(numbers.length);
numbers.push(6);
console.log(numbers);
console.log(numbers);
