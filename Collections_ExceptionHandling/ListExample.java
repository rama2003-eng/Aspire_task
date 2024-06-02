import java.util.LinkedList;
import java.util.List;

public class LinkedListExample {
    public static void main(String[] args) {

        List<Integer> linkedList = new LinkedList<>();
        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(3);

        // Access elements
        System.out.println("First element: " + linkedList.get(0)); // O(n) access time

        // Insert element
        linkedList.add(1, 10); // O(1) time for insertion if you have a reference to the node
        System.out.println("LinkedList after insertion: " + linkedList);

        // Remove element
        linkedList.remove(2); // O(1) time for removal if you have a reference to the node
        System.out.println("LinkedList after removal: " + linkedList);
    }
}
