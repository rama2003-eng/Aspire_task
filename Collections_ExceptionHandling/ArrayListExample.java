import java.util.List;

import java.util.ArrayList;

import java.util.ListIterator;

public class ArrayListExample {

    public static void main(String[] args) {

        List<Integer> list = new ArrayList<Integer>();
        list.add(2);
        list.add(6);
        list.add(7);
        list.add(3);
        list.add(4);
        list.add(5);
        list.add(8);
        list.add(8);

        System.out.println(list);

        list.remove(Integer.valueOf(2)); 

        System.out.println(list);

        ListIterator it=list.listIterator();

        while(it.hasNext()){

            System.out.println(it.next());
        }
        
    }
}
