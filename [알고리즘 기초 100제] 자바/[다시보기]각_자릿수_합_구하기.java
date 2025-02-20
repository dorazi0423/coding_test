//https://www.youtube.com/watch?v=RrjHOX1PF1A&list=PLVoihNyHW4xkm_KJ8_N8X7F6EQP4uSRyR&index=10
//나는 처음에 문자열로 받고, 그거를 subString()로 문자열을 잘랐음
//그 후에 int형으로 변환을 해서 더하는 방법을 했었다...
//앞으로 아래처럼 해보자

import java.util.Scanner;

public class Test {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int num = Integer.parseInt(sc.next());
		int sum = 0;
		
		while(num > 0) {
			sum += num%10;
			num = num/10;
		}
		
		System.out.println(num);
	}
}
