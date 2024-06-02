import java.util.Iterator;
import java.util.Set;
import java.util.TreeSet;

public class TreeSetExample {
    public static void main(String[] args) {
        Set<Integer> treeSet = new TreeSet<>();

        treeSet.add(5);
        treeSet.add(1);
        treeSet.add(2);
        treeSet.add(4);
        treeSet.add(3);

        // Duplicate elements are ignored
        treeSet.add(3);

        System.out.println("TreeSet: " + treeSet);

        treeSet.remove(3);
        System.out.println("TreeSet after removing element 2: " + treeSet);

        System.out.println("Iterating through TreeSet:");
        Iterator<Integer> iterator = treeSet.iterator();
        while (iterator.hasNext()) {
            System.out.println(iterator.next());
        }

        boolean containsFour = treeSet.contains(4);
        System.out.println("TreeSet contains 4: " + containsFour);
    }
}
