public class Fibonacci {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//피보나치 수열
		int prev = 1;
		int prevPrev = 1;
		System.out.print(prev + " ");
		System.out.print(prevPrev + " ");
		
		for(int i=2; i<10; i++) {
			int current = prev + prevPrev;
			
			System.out.print(current + " ");
			prevPrev = prev;
			prev = current;
		}
		System.out.println();
		
		//별찍기
		for(int i=1; i<10; i++) {
			for(int j=1; j<10; j++) {
				if(i == j) break;
				System.out.print("*");
			}
			System.out.println();
		}
	}
}
