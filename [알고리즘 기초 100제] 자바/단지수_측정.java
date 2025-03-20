//https://www.youtube.com/watch?v=iPrBYFUWgjU&list=PLVoihNyHW4xkm_KJ8_N8X7F6EQP4uSRyR&index=38

import java.util.*;
import java.lang.*;
import java.io.*;

// The main method must be in a class named "Main".
class Main {
    static final int SIZE = 5;
    static final int APART = 1;

    static int apartCnt = 0;
    static int []houseHold = new int[10];

    static int [][]map = {
        {0,0,0,1,1},
        {0,0,0,0,1},
        {1,0,0,0,0},
        {1,1,0,0,0},
        {1,1,0,1,1}
    };

    public static void doFunc(int x, int y, int apartIndex){
        map[x][y] = 0;
        houseHold[apartIndex]++;
        
        if(x-1 >= 0 && map[x-1][y] == APART)
            doFunc(x - 1, y, apartIndex);
        if(x+1 < SIZE && map[x+1][y] == APART)
            doFunc(x + 1, y, apartIndex);
        if(y-1 >= 0 && map[x][y-1] == APART)
            doFunc(x, y - 1, apartIndex);
        if(y+1 < SIZE && map[x][y+1] == APART)
            doFunc(x, y + 1, apartIndex);
    }
    public static void main(String[] args) {
        for(int i=0; i<SIZE; i++){
            for(int j=0; j<SIZE; j++){
                if(map[i][j] == 1){
                    doFunc(i, j, apartCnt);
                    apartCnt++;
                }
            }
        }

        System.out.println(apartCnt);
        for(int i: houseHold){
            System.out.print(i + " ");
        }
    }
}
