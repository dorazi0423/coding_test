//https://www.youtube.com/watch?v=rXNm4YpPVNc&list=PLVoihNyHW4xkm_KJ8_N8X7F6EQP4uSRyR&index=21

public class Test {
	static int getNum(int num) {
		int result = 0;
		
		while(num > 0) {
			int check = num % 10;
			
			if(check == 3 || check == 6 || check == 9)
				result++;
			
			num = num / 10;
		}
		
		return result;
	}
	
    public static void main(String[] args){
    	for(int i=1; i<=100; i++) {
    		int cnt = getNum(i);
    		
    		if(cnt == 0)
     			System.out.print(i + " ");
    		else {
    			for(int j=0; j<cnt; j++) {
    				System.out.print("짝 ");
    			}
    		}
    	}
    }
}
