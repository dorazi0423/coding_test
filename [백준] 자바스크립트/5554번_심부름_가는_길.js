const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(Number);
let sum = input.reduce((acc, cur)=>acc+cur,0);
console.log(Math.floor(sum/60));
console.log(sum%60);
