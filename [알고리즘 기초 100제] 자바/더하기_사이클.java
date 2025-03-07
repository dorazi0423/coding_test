
import java.util.Scanner;

public class Test {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		String input = sc.nextLine();
		
		int count = 0;
		String firstNum = input.substring(0,1);
		String lastNum = input.substring(1,2);
		
		while(true) {
			count++;	
			
			int result = Integer.parseInt(firstNum) + Integer.parseInt(lastNum);
			
			firstNum = lastNum;
			
			String resultStr = Integer.toString(result);
			lastNum = resultStr.substring(resultStr.length()-1);
			
			if(input.equals(firstNum + lastNum)) {
				break;
			}

		}
		
		System.out.println(count);
	}
}
