//https://www.acmicpc.net/problem/9295

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for(let i=1; i<=Number(input[0]); i++){
    const[a, b] = input[i].split(" ").map(Number);
    console.log("Case " + i + ": " + (a+b));
}
