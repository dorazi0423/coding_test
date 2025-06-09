//https://www.acmicpc.net/problem/10101

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(Number);
const sum = input.reduce((cur, value)=>cur+value, 0);

if(input[0] === 60 && input[1]===60 && input[2]===60)
    console.log("Equilateral");
else if(((input[0] === input[1]) || (input[1] === input[2]) || (input[0] === input[2])) && sum===180)
    console.log("Isosceles");
else if(sum===180)
    console.log("Scalene");
else
    console.log("Error");
