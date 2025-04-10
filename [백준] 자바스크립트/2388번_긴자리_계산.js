const [A, B] = require('fs').readFileSync("/dev/stdin").toString().split("\n").map(BigInt);
const arr = [];

arr.push(A+B);
arr.push(A-B);
arr.push(A*B);

console.log(arr.join("\n"));
