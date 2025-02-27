//https://www.youtube.com/watch?v=v-Rms3hEdgI&list=PLVoihNyHW4xkm_KJ8_N8X7F6EQP4uSRyR&index=18
import java.util.Scanner;

public class Test {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int num = Integer.parseInt(sc.nextLine());
		
		for(int i=0; i<num; i++) {
			for(int j=0; j<num; j++) {
				if(i > j)
					System.out.print(" ");
				else
					System.out.print("*");
			}
			
			System.out.println();
		}
	}
}
