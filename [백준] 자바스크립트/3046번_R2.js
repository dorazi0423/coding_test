//https://www.acmicpc.net/problem/3046
const [R1, S] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);
console.log(S*2-R1)
