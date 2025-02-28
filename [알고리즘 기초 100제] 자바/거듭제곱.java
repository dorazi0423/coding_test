//https://www.youtube.com/watch?v=vDgJbyT0VuE&list=PLVoihNyHW4xkm_KJ8_N8X7F6EQP4uSRyR&index=20

import java.util.Scanner;


public class Test {
    public static void main(String[] args){
    	Scanner sc = new Scanner(System.in);
    	int n = Integer.parseInt(sc.next());
    	int m = Integer.parseInt(sc.next());
    	
    	int result = 1;
    	for(int i=0; i<m; i++) {
    		result*=n;
    	}
    	
    	System.out.println(result);
    }
}
