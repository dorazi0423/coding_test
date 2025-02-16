//https://www.youtube.com/watch?v=DTEiENYVR14&list=PLVoihNyHW4xkm_KJ8_N8X7F6EQP4uSRyR&index=6

import java.util.Scanner;

public class Test {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String str = sc.nextLine();
		char ch []= str.toCharArray();
		
		for(int i=0; i<ch.length; i++) {
			if(ch[i] >= 'a' && ch[i] <='z')
				ch[i] = (char)(ch[i] + ('A' - 'a'));
			else if(ch[i] >= 'A' && ch[i] <= 'Z')
				ch[i] = (char)(ch[i] - ('A' - 'a'));
			
		}
		
		System.out.println(ch);
	}
}
