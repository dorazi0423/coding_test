//https://www.acmicpc.net/problem/5543
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(Number);

let food = Math.min(input[0], input[1], input[2]);
let drink = Math.min(input[3], input[4]);

console.log(food+drink-50);
