import java.util.Scanner;

public class test {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int num = Integer.parseInt(sc.nextLine());
		int result = 1;
		
		for(int i=1; i <= num; i++) {
			result *= i;
		}
	
		System.out.println(result);
	}
}
