//https://www.acmicpc.net/problem/25192

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);

const set = new Set();
let count = 0;

for(let i=1; i<=N; i++){
        if(input[i] == "ENTER"){
            count += set.size;
            set.clear();
        }else{
            set.add(input[i]);
        }
}
count += set.size;
console.log(count);
