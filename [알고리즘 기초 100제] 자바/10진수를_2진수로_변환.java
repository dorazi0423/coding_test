public class Test {

	public static void main(String[] args) {
		int inputNum = 19;
		int bin[] = new int[100];
		String result = "";
		
		while(inputNum>0) {
			result = inputNum%2 + result;
			inputNum = inputNum/2;
		}
		
		System.out.print("0" + result);
	}
}
