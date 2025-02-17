//유클리드 알고리즘
//최대공약수를 구할 때 사용하는 알고리즘

import java.util.Scanner;

public class Test {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num1 = sc.nextInt();
        int num2 = sc.nextInt();
        
        while (num2 != 0) { //유클리드 알고리즘
            int temp = num2;
            num2 = num1 % num2;
            num1 = temp;
        }
        
        System.out.println(num1);
    }
}
