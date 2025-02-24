const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let sum = input.reduce((cur, value)=> value+cur, 0);

for(let i=0; i<input.length-1; i++){
    
    for(let j=0; j<input.length-1; j++){
        if(input[j] > input[j+1]){
            let temp = input[j];
            input[j] = input[j+1];
            input[j+1] = temp;
        }
    }
}

console.log(sum/5);
console.log(input[2]);
