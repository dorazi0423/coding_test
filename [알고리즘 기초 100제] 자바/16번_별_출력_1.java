//https://www.youtube.com/watch?v=fOCpho8FfXU&list=PLVoihNyHW4xkm_KJ8_N8X7F6EQP4uSRyR&index=17

import java.util.Scanner;

public class Test {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int num = Integer.parseInt(sc.nextLine());
		
		for(int i=1; i<num+1; i++) {
			for(int j=0; j<i; j++) {
				System.out.print("*");
			}
			System.out.println("");
		}
	}
}
