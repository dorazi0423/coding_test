//https://www.acmicpc.net/problem/11050

const fs = require('fs');
const [N, K] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let result = [1, 1];

for(let i=N; i>N-K; i--){
    result[0] *= i;
}

for(let i=1; i<=K; i++){
    result[1] *= i;
}

console.log(result[0]/result[1]);
