import java.util.Scanner;

public class Prime {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int num = Integer.parseInt(sc.nextLine());
		boolean isPrimeNumber = true;
		
		for(int i=2; i<num/2; i++) {
			if(num%i == 0) {
				isPrimeNumber = false;
				break;
			}
		}
		
		if(isPrimeNumber)
			System.out.println(num +"는 소수입니다");
		else
			System.out.println(num +"는 소수가 아닙니다");
	}
}
