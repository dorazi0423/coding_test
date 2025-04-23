//https://www.acmicpc.net/problem/11005 
const [N, B] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
console.log(Number(N).toString(Number(B)).toUpperCase());
