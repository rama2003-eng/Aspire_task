//title : Body inside Interface
//Author:Ramapraba J
//Created Date:2-04-2024
interface Employee {
    String getName();
    double getSalary();
    
    default void displayInfo() {
        System.out.println("Name: " + getName());
        System.out.println("Salary: $" + getSalary());
    }
}

class Manager implements Employee {
    private String name;
    private double salary;
    
    public Manager(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }
    
    @Override
    public String getName() {
        return name;
    }
    
    @Override
    public double getSalary() {
        return salary;
    }
}

class Developer implements Employee {
    private String name;
    private double salary;
    
    public Developer(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }
    
    @Override
    public String getName() {
        return name;
    }
    
    @Override
    public double getSalary() {
        return salary;
    }
}

public class Main {
    public static void main(String[] args) {
        Employee manager = new Manager("John Doe", 50000);
        Employee developer = new Developer("Alice Smith", 60000);
        
        System.out.println("Manager:");
        manager.displayInfo();
        
        System.out.println("\nDeveloper:");
        developer.displayInfo();
    }
}