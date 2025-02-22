import java.util.Scanner;

public class Test {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = Integer.parseInt(sc.nextLine());
		int[][] arr = new int[n][n];
		
		for(int i=0; i<n; i++) {
			if(i%2 == 0) {
				for(int j=0; j<n; j++) {
					arr[i][j] = (j+1)+(n*i); 
				}
			}
			else {
				for(int j=n-1; j>=0; j--) {
					arr[i][j] = (n-j)+(n*i); 
				}
			}
		}
		
		for(int[] array : arr) {
			for(int value : array) {
				System.out.print(value + " ");
			}
			System.out.println();
		}
	}
}
