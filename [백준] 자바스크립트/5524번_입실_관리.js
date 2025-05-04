//https://www.acmicpc.net/problem/5524
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for(let i=1; i<input.length; i++){
    console.log(input[i].toLowerCase())
}
