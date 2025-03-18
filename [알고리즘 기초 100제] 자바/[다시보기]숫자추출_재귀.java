import java.util.*;
import java.lang.*;
import java.io.*;

class Main {
    public static void extract(int num){
        if(num/10 == 0){
            System.out.println(num);
            return;
        }
        extract(num/10);
        System.out.println(num%10);
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        extract(Integer.parseInt(sc.nextLine()));
    }
}
