//https://www.acmicpc.net/problem/2743

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('',(input)=>{
    console.log(input.length);
    rl.close();
})
