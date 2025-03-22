//https://www.youtube.com/watch?v=2fLeDoSSqPA&list=PLVoihNyHW4xkm_KJ8_N8X7F6EQP4uSRyR&index=41

import java.util.*;
import java.lang.*;
import java.io.*;

class Main {
    static int cache[] = new int[1000];

    public static int doFunc(int n){
        if (cache[n] != 0)
            return cache[n];

        //cache가 갱신이 되어있지 않다면
        return cache[n] = doFunc(n-1) + doFunc(n-2) + doFunc(n-3);
    }
    
    public static void main(String[] args) {
        int n;
        cache[1] = 1;
        cache[2] = 2;
        cache[3] = 4;
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        System.out.println(doFunc(n));
    }
}
