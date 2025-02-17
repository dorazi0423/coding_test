//유클리드 알고리즘
//최대공약수를 구할 때 사용하는 알고리즘
//큰 수(num1)와 작은 수(num2) 사이의 최대 공약수는 
//큰 수를 작은 수로 나눈 나머지(R)와 작은 수(num2) 사이의 최대 공약수와 같다는 점을 반복하여 문제를 해결
//https://olrlobt.tistory.com/44

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
