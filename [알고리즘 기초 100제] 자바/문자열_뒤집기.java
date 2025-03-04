//https://www.youtube.com/watch?v=iYMY8bBnt2s&list=PLVoihNyHW4xkm_KJ8_N8X7F6EQP4uSRyR&index=24

import java.util.Scanner;

public class Test {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		char[] str = sc.nextLine().toCharArray();
		String n;
		
		for(int i=0; i<str.length/2; i++) {
			char temp = str[i];
			str[i] = str[str.length-1-i];
			str[str.length-1-i] = temp;
		}
		
		n = new String(str);
		
		System.out.println(str);
	}
}
