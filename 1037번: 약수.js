//https://www.acmicpc.net/problem/1037
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('',(input)=>{
    let num = Number(input);
    let arr = [];
    
    rl.on('line',(line)=>{
        arr = line.split(' ').map(Number);
        max = Math.max(...arr);
        min = Math.min(...arr);
        
        console.log(max*min);
        
        rl.close();
    })
})
