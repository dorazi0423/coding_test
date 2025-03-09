//https://www.youtube.com/watch?v=Hdr9eLWz_MU&list=PLVoihNyHW4xkm_KJ8_N8X7F6EQP4uSRyR&index=29

import java.util.Scanner;

public class Test {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int[] input = new int[2];
		
		for(int i=0; i<input.length; i++) {
			input[i] = Integer.parseInt(sc.next());
		}
		
		int i = 0;
		char[] n = new char[100];
		
		while(input[0] > 0) {
			int tmp = input[0] % input[1];
			
			if(tmp >= 10 && tmp <= 15) {
				//만약에 A, B, C 일 때..
				n[i] = (char) ('A' + (tmp - 10));
			}else {
				n[i] = (char) ('0' + tmp);
			}
			
			input[0] /= input[1];
			i++;
		}
		i--;
		for(; i >= 0; i--) {
			System.out.print(n[i]);
		}
	}
}
