const [A, B] = require('fs').readFileSync("/dev/stdin").toString().split(" ").map(Number);

console.log((A+B)*(A-B));
