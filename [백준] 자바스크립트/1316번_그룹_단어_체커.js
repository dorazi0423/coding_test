//https://www.acmicpc.net/problem/1316

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
const N = Number(input[0]);

const check = (word) =>{
    const set = new Set();
    let prev = "";
    
    for(let i=0; i<word.length; i++){
        if(set.has(word[i]) && prev !== word[i]){
            return false;
        }

        set.add(word[i]);
        prev = word[i];
    }
    
    return true;
}

let count = 0;
for(let i=1; i<input.length; i++){
    if(check(input[i]))
        count++;
}

console.log(count);
