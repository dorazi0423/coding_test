//https://www.acmicpc.net/problem/13277
const [A, B] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(BigInt);
console.log((A*B).toString());
