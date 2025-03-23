import java.util.*;
import java.lang.*;
import java.io.*;

class Main {
    public static int min = 99999999;
    public static void doFunc(int num, int way, int cnt){
        if(way == 3 && num % 3 == 0){
            cnt++;
            num /= way;
            for(int i = 1; i <=3; i++){
                doFunc(num, way, cnt);
            }
        }else if (way == 2 && num % 2 == 0){
            cnt ++;
            num /= way;
            for(int i = 1; i<= 3; i++){
                doFunc(num, way, cnt);
            }
        }else if(num >= 2){
            cnt++;
            num -= 1;
            for(int i= 1; i<= 3; i++){
                doFunc(num, way, cnt);
            }
        }
        if (num == 1 && cnt < min){
            min = cnt;
            return;
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = Integer.parseInt(sc.nextLine());
        for(int i= 1; i <= 3; i++)
            doFunc(n, i, 0);
        System.out.println(min);
    }
}
