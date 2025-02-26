import java.util.Scanner;


public class Test {
	
    public static void main(String[] args){
    	Scanner sc = new Scanner(System.in);
    	int s = Integer.parseInt(sc.next());
    	int f = Integer.parseInt(sc.next());
    	
    	for(int i=1; i<=9; i++) {
    		for(int j=s; j<=f; j++) {
    			System.out.printf("%d * %d = %d\t",j, i, j*i);
    		}
    		System.out.println();
    	}
    }
}
