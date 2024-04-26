var products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
];
function increasePrice(products) {
    return products.map(function (product) {
        return {
            name: product.name,
            price: product.price * 1.1
        };
    });
}
var updatedProducts = increasePrice(products);
console.log(updatedProducts);
var employeeSet = new Set();
var employee1 = { id: 1, name: "John Doe", salary: 50000 };
var employee2 = { id: 2, name: "Jane Smith", salary: 60000 };
var employee3 = { id: 3, name: "Alice Johnson", salary: 55000 };
employeeSet.add(employee1);
employeeSet.add(employee2);
employeeSet.add(employee3);
function incrementSalary(set, percentage) {
    set.forEach(function (employee) {
        employee.salary *= (1 + percentage / 100);
    });
}
console.log("Before incrementing salary:", employeeSet);
incrementSalary(employeeSet, 10);
console.log("After incrementing salary by 10%:", employeeSet);
