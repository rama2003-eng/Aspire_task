import java.util.Vector;
import java.util.ArrayList;

class VectorExample{

public static void main(String args[]){

Vector<String> employeeName=new Vector<String>();

employeeName.add("Abel");

employeeName.add("Bob");

employeeName.add("Charlie");

employeeName.add(1, "David");

employeeName.remove("Abel");
System.out.println(employeeName);

ArrayList<String> employeeName1=new ArrayList<String>();

employeeName1.add("Abel"); 

employeeName1.add("Bob");

employeeName1.add("Charlie");

employeeName1.add(2, "David");
System.out.println(employeeName1);
}
}