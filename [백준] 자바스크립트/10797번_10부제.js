const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const day = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let result = 0;

for(let value of arr){
    if(value === day)
        result++;
}

console.log(result);
