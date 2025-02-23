//https://www.acmicpc.net/problem/2444
const fs = require('fs');
const input = Number(fs.readFileSync("/dev/stdin").toString().trim())

for(let i=1; i <= input; i++){
    let gap = ' '.repeat(input - i);
    let stars = '*'.repeat(2 * i -1);
    console.log(gap +  stars);
}

for(let i=input-1; i>=1; i--){
    let gap = ' '.repeat(input - i);
    let stars = '*'.repeat(2 * i -1);
    console.log(gap +  stars);
}
