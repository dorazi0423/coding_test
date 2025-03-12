//https://www.youtube.com/watch?v=JyaK14AhGm4&list=PLVoihNyHW4xkm_KJ8_N8X7F6EQP4uSRyR&index=32

import java.util.Scanner;

public class Test {
	static int RecursiveFunction(int num) {
		if(num == 1)
			return 1;
		else
			return num * RecursiveFunction(num-1);
	}
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int result = RecursiveFunction(Integer.parseInt(sc.next()));
		
		System.out.println(result);
	}
}
