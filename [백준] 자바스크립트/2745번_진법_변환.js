//https://www.acmicpc.net/problem/2745

const [N, B] = require("fs").readFileSync("/dev/stdin").toString().split(" ");

console.log(parseInt(N, Number(B)).toString(10));
