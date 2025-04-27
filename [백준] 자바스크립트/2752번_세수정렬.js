//https://www.acmicpc.net/problem/2752

const arr = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);
arr.sort((a, b)=>a-b);
console.log(arr.join(" "));
