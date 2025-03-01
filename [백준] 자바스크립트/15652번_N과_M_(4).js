//https://www.acmicpc.net/problem/15652

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ').map(Number);

let result = [];
let arr = Array(input[0] + 1).fill(false);
let temp = [];

function backTrak(start, depth){
    if(depth === input[1]){
        result.push(temp.join(' '));
        return;
    }
    
    for(let i=start; i<=input[0]; i++){
            temp.push(i);
            backTrak(i, depth+1);
            temp.pop();
    }
}

backTrak(1, 0);
console.log(result.join('\n'));
