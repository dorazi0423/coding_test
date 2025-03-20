import java.util.*;
import java.lang.*;
import java.io.*;

// The main method must be in a class named "Main".
class Main {
    static int result = 0; //치킨 먹은 개수
    static int check = 0; //쿠폰 받을 수 있는지

    //치킨 얼마나 먹을 수 있는지 리턴
    static int count(int n, int k){
        if(n == 0){
            return result;
        }
        result++;
        check++;

        if(check == k){
            n++;
            check = 0;
        }
        return count(n-1, k);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = Integer.parseInt(sc.next());
        int k = Integer.parseInt(sc.next());
        
        System.out.println(count(n, k));
    }
}
