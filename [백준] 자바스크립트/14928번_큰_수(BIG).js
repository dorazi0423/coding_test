//https://www.acmicpc.net/problem/14928
const input = BigInt(require("fs").readFileSync("/dev/stdin").toString());
console.log(Number(input%20000303n));

