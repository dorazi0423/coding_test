//https://www.acmicpc.net/problem/2581

const fs = require('fs');
const [M, N] = fs.readFileSync("/dev/stdin").toString().trim().split('\n').map(Number);

let arr = [];
let sum = 0;

const checkNum = (n) => {
    if(n<2) return false;
    for(let i=2; i*i<=n; i++){
        if(n % i === 0)
            return false;
    }
    return true;
}

for(let i=M; i<=N; i++){
    if(checkNum(i)){
        arr.push(i);
        sum += i;
    }
}

if(arr.length === 0)
    console.log(-1);
else
    console.log(sum + "\n" + arr[0]);
