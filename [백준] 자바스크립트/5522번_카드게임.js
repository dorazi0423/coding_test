const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").reduce((acc, cur)=>acc+Number(cur),0);
console.log(input);
