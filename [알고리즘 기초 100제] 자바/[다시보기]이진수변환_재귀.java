//https://www.youtube.com/watch?v=gVTfhGzRujk&list=PLVoihNyHW4xkm_KJ8_N8X7F6EQP4uSRyR&index=37

import java.util.*;
import java.lang.*;
import java.io.*;

class Main {
    public static void Recursive(int num){
        if(num / 2 == 0){
            System.out.print(num);
            return;
        }
        
        Recursive(num / 2);

        System.out.print(num % 2);
    }
    
    public static void main(String[] args) {
        Recursive(17);
    }
}
