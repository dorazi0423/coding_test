//https://www.youtube.com/watch?v=DH18W_oII6U&list=PLVoihNyHW4xkm_KJ8_N8X7F6EQP4uSRyR&index=27

import java.util.Arrays;
import java.util.Scanner;

public class Test {
	//문자를 받아서 숫자를 역배열하여 int로 리턴
	public static int changeSangsuNum(String str){
		String[] strArr = str.split("");
		String[] resultArr = new String[strArr.length];
		
		for(int i = strArr.length-1; i >= 0; i--) {
			resultArr[strArr.length-1-i] = strArr[i];
		}

		return Integer.parseInt(String.join("", resultArr));
	}
	
	//배열 중 가장 큰 값을 반환하는 메서드
	public static int maxInt(int[] arr) {
		int max = 0;
		
		for(int num : arr) {
			if(max < num)
				max = num;
		}
		
		return max;
	}
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int num[] = new int[2];
		
		for(int i=0; i<2; i++) {
			num[i] = Test.changeSangsuNum(sc.next());
		}
		
		System.out.println(Test.maxInt(num));
	}
}
