import java.util.*;
import java.lang.*;
import java.io.*;

// The main method must be in a class named "Main".
class Main {
    static int[] ans = new int[1000001];
    public static void main(String[] args) {
        ans[2] = 1;
        ans[3] = 1;
        Scanner scan = new Scanner(System.in);
        int input = scan.nextInt();

        for(int i = 4; i <= 1000000; i++){
            int a = 99999, b = 99999, c = 99999;
            for(int w = 1; w <= 3; w++){
                if(w == 1){
                    a = ans[i - 1];
                } else if (w == 2){
                    if(i % 2 == 0){
                        b = ans[i/2];
                    }
                } else if (w == 3){
                    if(i % 3 == 0){
                        c = ans[i / 3];
                    }
                }
            }
            int min = Math.min(Math.min(a, b), c);
            ans[i] = 1 + min;
        }
        System.out.println(ans[input]);
    }
}
