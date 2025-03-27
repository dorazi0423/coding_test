import java.util.*;
import java.lang.*;
import java.io.*;

// The main method must be in a class named "Main".
class Main {

    public static void main(String[] args) {
        int coin[] = new int[101];
        int dp[] = new int[10001];

        Scanner sc = new Scanner(System.in);
        int numCoin = sc.nextInt();
        int money = sc.nextInt();

        for(int i=1; i<=numCoin; i++){
            coin[i] = sc.nextInt();
        }

        dp[0] = 1;
        for(int i=1; i<=numCoin; i++){
            for(int j=coin[i]; j<=money; j++){
                dp[j] += dp[j - coin[i]];
            }
        }

        System.out.println(dp[money]);
    }
}
