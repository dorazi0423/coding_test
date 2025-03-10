//https://www.youtube.com/watch?v=ONOTz6RsPzo&list=PLVoihNyHW4xkm_KJ8_N8X7F6EQP4uSRyR&index=30

import java.util.Scanner;

public class Test {
	public static boolean checkAscending(String[] input) {
		boolean flag = true;
		
		for(int i=0; i<input.length-2; i++) {
			int current = Integer.parseInt(input[i]);
			int next = Integer.parseInt(input[i+1]);
			
			if(current+1 != next) {
				flag = false;
				break;
			}
		}
		
		return flag;
	}
	
	public static boolean checkDescending(String[] input) {
		boolean flag = true;
		
		for(int i=input.length-2; i>0; i--) {
			int current = Integer.parseInt(input[i]);
			int next = Integer.parseInt(input[i+1]);
			
			if(current-1 != next) {
				flag = false;
				break;
			}
		}
		
		return flag;
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String[] input = sc.nextLine().split(" ");
		boolean flag = true;
		
		if(Test.checkAscending(input))
			System.out.println("ascending");
		else if(Test.checkDescending(input))
			System.out.println("descending");
		else
			System.out.println("mixed");
	}
}
