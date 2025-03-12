//https://www.youtube.com/watch?v=As9vKkG7MfI&list=PLVoihNyHW4xkm_KJ8_N8X7F6EQP4uSRyR&index=31

import java.io.BufferedWriter;
import java.util.Scanner;

public class Test {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int input = Integer.parseInt(sc.nextLine());
		StringBuffer sb = new StringBuffer();
		
		for(int i=1; i<=input; i++) {
			if(i == 1) {
				sb.append(i);
			}
			else if(i % 2 == 0) {
				sb.append("+" + i);
			}
			else {
				sb.append("-" + i);
			}
		}
		
		System.out.println(sb);
	}
}
