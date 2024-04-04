//title : Method Overriding(Runtime Polymorphism)
//Author:Ramapraba J
//Created Date:3-04-2024
class Employee {
    private String name;
    private double salary;
    
    public Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }
    
    public void displayDetails() {
        System.out.println("Name: " + name);
        System.out.println("Salary: $" + salary);
    }
}

class Manager extends Employee {
    private String department;
    
    public Manager(String name, double salary, String department) {
        super(name, salary);
        this.department = department;
    }
    
    @Override
    public void displayDetails() {
        super.displayDetails(); 
        System.out.println("Department: " + department);
    }
}

public class RuntimePolymorphism {
    public static void main(String[] args) {
       
        Employee employee = new Employee("John", 50000);
        
        System.out.println("Employee details:");
        employee.displayDetails();
        
        System.out.println();
        Manager manager = new Manager("Smith", 80000, "Sales");
        
        System.out.println("Manager details:");
        manager.displayDetails();
    }
}