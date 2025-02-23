import java.util.Scanner;


public class Test {
	
    public static void main(String[] args){
    	Scanner sc = new Scanner(System.in);
    	int num = Integer.parseInt(sc.nextLine());
    	int[][] arr = new int[num][num];
    	
    	for(int i=0; i<num; i++) {
    		for(int j=0; j<num; j++) {
    			arr[j][i] = (j+1) + (num*i);
    		}
    	}
    	
    	for(int[] arrs : arr) {
    		for(int value : arrs) {
    			System.out.printf("%4d", value);
    		}
    		System.out.println();
    	}
    }
}
