//https://www.acmicpc.net/problem/15651

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

let result = [];
let temp = [];

function backTrak(depth){
    if(depth === input[1]){
        result.push(temp.join(' '));
        return;
    }
    
    for(let i=1; i<=input[0]; i++){
            temp.push(i);
            backTrak(depth + 1)
            temp.pop();
    }
}

backTrak(0);
console.log(result.join('\n'));
