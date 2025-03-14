//https://www.youtube.com/watch?v=hmc_m_eTek4&list=PLVoihNyHW4xkm_KJ8_N8X7F6EQP4uSRyR&index=33

import java.util.*;
import java.lang.*;
import java.io.*;

class Main {
    public static int RecursiveFunction(int num){
        if(num == 1)
            return 1;
        else
            return num + RecursiveFunction(num-1);
        }
    public static void main(String[] args) {
        System.out.println(Main.RecursiveFunction(4));
    }
}

