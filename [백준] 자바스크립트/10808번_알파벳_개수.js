//https://www.acmicpc.net/problem/10808
const input = require("fs").readFileSync("/dev/stdin").toString().split("");
const result = new Array(123).fill(0);

for(let value of input){
    result[value.charCodeAt(0)] += 1;
}

console.log(result.slice(97, 123).join(' '));
