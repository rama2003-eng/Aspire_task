//title : CopyConstructor
//Author:Ramapraba J
//Created Date:3-04-2024
public class EmployeeRecords {
    private String name;
    private int age;


    public EmployeeRecords(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public EmployeeRecords(EmployeeRecords emp) {
        this.name = emp.name;
        this.age = emp.age;
    }

    public void printDetails() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }

    public static void main(String[] args) {
        EmployeeRecords employee1 = new EmployeeRecords("John", 30);
        EmployeeRecords employee2 = new EmployeeRecords(employee1);
        System.out.println("Details of employee2:");
        employee2.printDetails();
    }
}