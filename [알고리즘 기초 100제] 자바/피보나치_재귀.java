import java.util.*;
import java.lang.*;
import java.io.*;

class Main {
    public static int pivo(int num){
        if(num == 1)
            return 1;
        if(num == 2)
            return 1;

        return pivo(num-1) + pivo(num-2);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = Integer.parseInt(sc.nextLine());
        int ans = pivo(num);
        System.out.println(ans);
    }
}
