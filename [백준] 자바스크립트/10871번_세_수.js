//https://www.acmicpc.net/problem/10817

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
input.sort((a, b) => a - b);
console.log(input[1]);
