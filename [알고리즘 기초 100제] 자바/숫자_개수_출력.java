import java.util.Scanner;

public class Test {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = Integer.parseInt(sc.nextLine());
		int[]arr = new int[10];

		while(n > 0) {
			arr[n%10]++;
			n /= 10;
		}
		
		for(int i=0; i<arr.length; i++) {
			System.out.println(i +" : " + arr[i]);
		}
	}
}
