//https://www.youtube.com/watch?v=f7_eMzqIU70&list=PLVoihNyHW4xkm_KJ8_N8X7F6EQP4uSRyR&index=22

import java.util.Scanner;

public class Test {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String str = sc.nextLine();

		String[] strArr = str.split(" ");
		
		int [] arr = new int[strArr.length];
		boolean [] check = new boolean[100];
		
		for(int i=0; i<strArr.length; i++) {
			arr[i] = Integer.parseInt(strArr[i]);
			check[arr[i]] = true;
		}
		
		for(int i=0; i<check.length; i++) {
			if(check[i])
				System.out.print((i) + " ");
		}
	}
}
