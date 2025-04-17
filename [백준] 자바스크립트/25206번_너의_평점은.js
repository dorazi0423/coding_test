//https://www.acmicpc.net/problem/25206
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let sum = 0;
let total = 0;
const check = {
    "A+":4.5,
    "A0":4.0,
    "B+":3.5,
    "B0":3.0,
    "C+":2.5,
    "C0":2.0,
    "D+":1.5,
    "D0":1.0,
    "F":0.0
}
for(let value of input){
    const [name, score, grade] = value.split(" ");
    if(grade === "P")
        continue;
  
    sum += Number(score)*check[grade];
    total += Number(score);
}

console.log((sum / total).toFixed(6));
