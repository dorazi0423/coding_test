//https://www.acmicpc.net/problem/33515

const input = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);
console.log(Math.min(...input));
