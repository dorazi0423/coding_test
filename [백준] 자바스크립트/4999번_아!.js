const input = require('fs').readFileSync("/dev/stdin").toString().split("\n");

console.log(input[0].length >= input[1].length ? "go" : "no");
