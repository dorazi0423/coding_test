//https://www.youtube.com/watch?v=8tjHHJEWkbA

import java.util.Map;
import java.util.Scanner;
import java.util.TreeMap;

public class Test {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = Integer.parseInt(sc.nextLine());
		
		int[][] arr = new int[N][N];
		int x = 0;
		int y = 0;
		int num = 1;
		int f = N;
		
		for(int i=0; i<2*N-1; i++) {
			switch(i % 4) {
				case 0: //오른쪽 
					for(int j = 0; j < f; j++) {
						arr[y][x] = num;
						x++;
						num++;
					}
					x--;
					y++;
					f--;
					break;
				case 1: //아래 
					for(int j = 0; j < f; j++) {
						arr[y][x] = num;
						y++;
						num++;
					}
					y--;
					x--;
					break;
				case 2: //왼쪽
					for(int j = 0; j < f; j++) {
						arr[y][x] = num;
						x--;
						num++;
					}
					x++;
					y--;
					f--;
					break;
				case 3: //위
					for(int j = 0; j < f; j++) {
						arr[y][x] = num;
						y--;
						num++;
					}
					x++;
					y++;
					break;
			}
		}
		
		for(int[] arrs : arr) {
			for(int nums : arrs) {
				System.out.print(nums + " ");
			}
			System.out.println();
		}
	}
}
