const input = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);

if(input[0] === input[1])
    console.log(1);
else
    console.log(0);
