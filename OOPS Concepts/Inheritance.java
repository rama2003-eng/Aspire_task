//title : Inheritance(Single,Multilevel,Hierarchical)
//Author:Ramapraba J
//Created Date:3-04-2024
class Person {
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    void displayDetails() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}

// Single Inheritance
class Employee extends Person {
    double salary;

    public Employee(String name, int age, double salary) {
        super(name, age); 
        this.salary = salary;
    }

    void displayEmployeeDetails() {
        displayDetails(); 
        System.out.println("Salary: " + salary);
    }
}

// Multilevel Inheritance
class Manager extends Employee {
    String department;

    public Manager(String name, int age, double salary, String department) {
        super(name, age, salary); 
        this.department = department;
    }

    void displayManagerDetails() {
        displayEmployeeDetails(); 
        System.out.println("Department: " + department);
    }
}

// Hierarchical Inheritance
class Customer extends Person {
    int customerId;

    public Customer(String name, int age, int customerId) {
        super(name, age); 
        this.customerId = customerId;
    }

    void displayCustomerDetails() {
        displayDetails(); 
        System.out.println("Customer ID: " + customerId);
    }
}

public class Inheritance {
    public static void main(String[] args) {
        Employee emp = new Employee("John", 30, 50000);
        emp.displayEmployeeDetails();

        System.out.println();

        Manager manager = new Manager("Alice", 35, 70000, "IT");
        manager.displayManagerDetails();

        System.out.println();

        Customer customer = new Customer("Bob", 25, 1001);
        customer.displayCustomerDetails();
    }
}