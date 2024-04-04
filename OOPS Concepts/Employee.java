//title : Employee Class
//Author:Ramapraba J
//Created Date:2-04-2024

public class Employee {
    private int empId;
    private String empName;
    private String designation;
    private String email;
    private String address;

    public Employee(int empId, String empName, String designation, String email,  String address) {
        this.empId = empId;
        this.empName = empName;
        this.designation = designation;
        this.email = email;
        this.address = address;
    }


    public void printDetails() {
        System.out.println("Employee ID: " + empId);
        System.out.println("Employee Name: " + empName);
        System.out.println("Designation: " + designation);
        System.out.println("Email: " + email);
        System.out.println("Address: " + address);
      
    }

    public static void main(String[] args) {
    
        Employee employee = new Employee(1, "John ", "Software Engineer", "john@example.com", "123 Main St");
        employee.printDetails();
    }
}


