const [A, B] = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(BigInt);
console.log((A+B).toString());
