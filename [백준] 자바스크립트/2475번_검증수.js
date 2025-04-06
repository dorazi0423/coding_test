const input = require('fs').readFileSync("/dev/stdin").toString().split(" ").map(Number);
let sum = 0;
for(let value of input){
    sum+=Math.pow(value, 2);
}
console.log(Math.floor(sum%10));
