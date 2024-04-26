//Map 
interface Product {
    name: string;
    price: number;
}

const products: Product[] = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
];


function increasePrice(products: Product[]): Product[] {
    return products.map(product => {
        return {
            name: product.name,
            price: product.price * 1.1 
        };
    });
}

const updatedProducts: Product[] = increasePrice(products);


console.log(updatedProducts);


//Set
interface Employee {
    id: number;
    name: string;
    salary: number;
}

const employeeSet = new Set<Employee>();
const employee1: Employee = { id: 1, name: "John Doe", salary: 50000 };
const employee2: Employee = { id: 2, name: "Jane Smith", salary: 60000 };
const employee3: Employee = { id: 3, name: "Alice Johnson", salary: 55000 };

employeeSet.add(employee1);
employeeSet.add(employee2);
employeeSet.add(employee3);


function incrementSalary(set: Set<Employee>, percentage: number): void {
    set.forEach(employee => {
        employee.salary *= (1 + percentage / 100); 
    });
}

console.log("Before incrementing salary:", employeeSet);
incrementSalary(employeeSet, 10); 
console.log("After incrementing salary by 10%:", employeeSet);