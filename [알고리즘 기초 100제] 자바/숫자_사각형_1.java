package prac;

import java.util.Scanner;

public class Test {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int num = Integer.parseInt(sc.next());

		for(int i=0; i<num; i++) {
			for(int j=0; j<num; j++) {
				System.out.print(((j+1) + (num*i)) + " ");
			}
			System.out.println();
		}
	}
}
