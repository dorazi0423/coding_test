//어렵다.. 이해가 안된다.. 나중에 꼭 다시 보자.....

import java.util.*;
import java.lang.*;
import java.io.*;

// The main method must be in a class named "Main".
class Main {
    public static int getMax(int a, int b){
        if(a > b)
            return a;
        else
            return b;
    }
    
    public static void main(String[] args) {
        int cnt;
        int input[] = new int[1001];
        Scanner scanner = new Scanner(System.in);
        count = scanner.nextInt();

        for(int i=1; i<= cnt; i++){
            for(int j=1)
        }

        int dpH[] = new int[1001];
        int dpL[] = new int[1001];
        for(int i=1; i<=cnt; i++){
            dpH[i] = 1;
            dpL[i] = 1;
        }

        for(int i=2; i<=cnt; i++){
            for(int j=i; j>=1; j--){
                if(input[j] < input[i]){
                    dpH[i] = getMax(dpH[i], dpH[j] + 1);
                }
            }
        }

        for(int i=2; i<=cnt; i++){
            for(int j=i; j>=1; j--){
                if(input[j] < input[i]){
                    dpH[i] = getMax(dpH[i], dpH[j] + 1);
                }
            }
        }

        for(int i=cnt - 1; i>=1; i--){
            for(int j=i; j <= cnt; j++){
                if(input[j] < input[i]){
                    dpL[i] = getMax(dpL[i], dpL[j] + 1);
                }
            }
        }

        int max = 0;
        for(int i = 1; i <= cnt; i++){
            if(max < dpH[i] + dpL[i]){
                max = dpH[i] + dpL[i];
            }
        }
        System.out.print(max - 1);
    }
}
