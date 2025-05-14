//https://www.acmicpc.net/problem/5565
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(Number);

let sum = 0;

for(let i=1; i<10; i++){
    sum += input[i];
}

console.log(input[0]-sum);
