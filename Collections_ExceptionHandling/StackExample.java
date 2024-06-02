import java.util.Stack;

class StackExample{

 public static void main(String args[]){

 Stack<String> employeeName=new Stack<String>();

 employeeName.push("Abel");
 employeeName.push("Bob");
 employeeName.push("Charlie");
 System.out.println(employeeName.peek());
 employeeName.pop();
 System.out.println(employeeName);
 System.out.println(employeeName.isEmpty());
System.out.println(employeeName.search(3));
 }
}
