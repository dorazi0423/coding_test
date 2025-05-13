//https://www.acmicpc.net/problem/10039
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let sum = 0;
for(let value of input){
    if(value<40)
        sum+=40;
    else
        sum+=value;
}
console.log(sum/5)
