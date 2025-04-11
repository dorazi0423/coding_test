const input = require('fs').readFileSync("/dev/stdin").toString().split("\n");
let result = [];

for(let i=0; i<input.length; i++){
    const [M, F] = input[i].split(" ").map(Number);
    
    if(M===0 && F===0)
        break;
    
    result.push(M + F);
}

console.log(result.join("\n"));
