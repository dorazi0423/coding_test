//https://www.acmicpc.net/problem/24723

const fs = require('fs');
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

let result = 1;

for(let i=0; i<input; i++){
    result *= 2;
}

console.log(result);
