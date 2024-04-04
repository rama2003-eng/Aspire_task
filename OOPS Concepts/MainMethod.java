//title : Abstract Class
//Author:Ramapraba J
//Created Date:3-04-2024
abstract class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public abstract String getOccupation();

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}
class Student extends Person {
    private String studentID;

    public Student(String name, int age, String studentID) {
        super(name, age);
        this.studentID = studentID;
    }

    @Override
    public String getOccupation() {
        return "Student";
    }

    public String getStudentID() {
        return studentID;
    }
}

public class MainMethod {
    public static void main(String[] args) {
    
        Student student = new Student("John Doe", 20, "S12345");
        System.out.println("Student Details:");
        System.out.println("Name: " + student.getName());
        System.out.println("Age: " + student.getAge());
        System.out.println("Occupation: " + student.getOccupation());
        System.out.println("Student ID: " + student.getStudentID());
    }
}