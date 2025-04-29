//https://www.acmicpc.net/problem/4470
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);  // 첫 번째 줄은 문장의 수, N
for (let i = 1; i <= N; i++) {
    console.log(i + ". " + input[i]);
}
