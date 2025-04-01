const [a, b] = require('fs').readFileSync("/dev/stdin").toString().split(" ").map(Number);

console.log(Math.abs(a-b));
