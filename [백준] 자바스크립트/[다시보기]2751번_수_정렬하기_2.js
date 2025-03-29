//https://www.acmicpc.net/problem/2751
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const N = input.shift();  // 첫 번째 줄을 제거
console.log(input.sort((a, b) => a - b).join("\n"));
