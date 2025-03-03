//https://www.youtube.com/watch?v=gByou4ahmXs&list=PLVoihNyHW4xkm_KJ8_N8X7F6EQP4uSRyR&index=23
//팰린드롬이란 순서를 거꾸로 읽었을 때도 원래의 문자열이나 수열과 동일한 경우

import java.util.Scanner;

public class Test {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String str = sc.nextLine();
		boolean flag = true;
		
		for(int i=0; i<str.length()/2; i++) {
			if(str.charAt(i) != str.charAt(str.length()-i-1)) {
				flag = false;
				break;
			}
		}
		
		System.out.println(flag);
	}
}
