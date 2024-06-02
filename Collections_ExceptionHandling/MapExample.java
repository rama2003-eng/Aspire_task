import java.util.HashMap;
import java.util.Map;

public class MapExample {
    public static void main(String[] args) {
       
        Map<Integer, String> map = new HashMap<>();

        map.put(1, "Apple");
        map.put(2, "Banana");
        map.put(3, "Cherry");
        map.put(4, "Date");
        map.put(5, "Elderberry");
        System.out.println(map.entrySet());
        System.out.println(map.keySet());
        System.out.println(map.values());
        String value = map.get(3);
        System.out.println(value);
      
        int keyToCheck = 5;
        System.out.println(map.containsKey(keyToCheck));
           
        System.out.println("Iterating over the map entries:");
        for (Map.Entry<Integer, String> entry : map.entrySet()) {
            System.out.println("Key: " + entry.getKey() + ", Value: " + entry.getValue());
        }

       System.out.println(map.remove(2));
        
        System.out.println("Updated map: " + map);
    }
}
