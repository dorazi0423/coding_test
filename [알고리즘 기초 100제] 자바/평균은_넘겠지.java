

import java.util.Scanner;

public class Test {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String[] arr = sc.nextLine().split(" ");
		int num = Integer.parseInt(arr[0]);
		double avg = 0; //평균값
		int sum = 0; //합계
		int count = 0; //평균넘은 값들의 개수
		
		for(int i=1; i<=num; i++) {
			sum += Integer.parseInt(arr[i]); 
		}
		
		avg = (double)sum / num;
		
		for(int i=1; i<=num; i++) {
			if(Integer.parseInt(arr[i]) >= avg)
				count++;
		}
		
		System.out.println((count/(double)num)*100);
		System.out.println(count);
		System.out.println(num);
	}
}
