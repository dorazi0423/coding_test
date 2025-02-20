//https://www.acmicpc.net/problem/9086
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('',(input)=>{
    let T = Number(input);
    
    rl.on('line',(line)=>{
        
        console.log(line[0]+line[line.length-1]);
    })
})
