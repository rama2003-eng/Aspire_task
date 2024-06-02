import java.util.Queue;

import java.util.LinkedList;

class QueueExample{

public static void main(String[] args){

Queue<Integer> numbers=new LinkedList();

numbers.offer(1);

numbers.offer(2);

numbers.offer(3);

numbers.offer(4);

System.out.println(numbers);

int removenumber=numbers.poll();

System.out.println(removenumber);
} 
}