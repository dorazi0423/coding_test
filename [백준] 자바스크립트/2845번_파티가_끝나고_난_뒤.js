//https://www.acmicpc.net/problem/2845
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [L, P] = input[0].split(" ").map(Number);
const num = L*P;
let result = [];
let arr = input[1].split(" ").map(Number);
for(let value of arr){
    result.push(value - num);
}

console.log(result.join(" "));
