import java.util.LinkedList;
import java.util.List;

public class LinkedListExample {
    public static void main(String[] args) {

        List<Integer> linkedList = new LinkedList<>();
        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(3);

        System.out.println("First element: " + linkedList.get(0)); // O(n) access time

        linkedList.add(1, 10); 
        System.out.println("LinkedList after insertion: " + linkedList);

  
        linkedList.remove(2); 
        System.out.println("LinkedList after removal: " + linkedList);
    }
}
