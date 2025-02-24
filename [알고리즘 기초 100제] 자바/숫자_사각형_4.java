package prac;

import java.util.Arrays;
import java.util.Scanner;

public class Test {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		int n = Integer.parseInt(sc.nextLine());
		int[][] arr = new int[n][n];
		
		for(int i=1; i<=n; i++) {
			for(int j=1; j<=n; j++) {
				arr[i-1][j-1] = i*j;
			}
		}
		
		for(int[] arrs : arr) {
			for(int value : arrs) {
				System.out.print(value + " ");
			}
			System.out.println();
		}
	}
}
