//https://www.acmicpc.net/problem/1271

const [n, m] = require('fs').readFileSync("/dev/stdin").toString().split(' ').map(BigInt);

console.log((n/m)+"\n"+(n%m));
