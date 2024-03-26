let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "orange"];


console.log(numbers[0]); 
console.log(fruits[1]); 


numbers[2] = 10;
console.log(numbers); 


for (let fruit of fruits) {
    console.log(fruit);
}

console.log(numbers.length); 
numbers.push(6);
console.log(numbers); 
console.log(numbers); 
