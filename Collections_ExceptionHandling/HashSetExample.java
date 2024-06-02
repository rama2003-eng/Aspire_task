import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

public class HashSetExample {
    public static void main(String[] args) {
        Set<Integer> hashSet = new HashSet<>();

        hashSet.add(1);
        hashSet.add(2);
        hashSet.add(3);
        hashSet.add(4);
        hashSet.add(5);

        // Duplicate elements are ignored
        hashSet.add(3);

        
        System.out.println("HashSet: " + hashSet);

        hashSet.remove(2);
        System.out.println("HashSet after removing element 2: " + hashSet);

        
        System.out.println("Iterating through HashSet:");
        Iterator<Integer> iterator = hashSet.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

       
        boolean containsFive = hashSet.contains(5);
        System.out.println("HashSet contains 5: " + containsFive);
    }
}
