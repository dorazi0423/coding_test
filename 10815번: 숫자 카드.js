//https://www.acmicpc.net/problem/10815
const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let inputLines = [];

rl.on('line',(line)=>{
    inputLines.push(line);
});

rl.on('close',()=>{
    let N_arr=new Set(inputLines[1].split(' ').map(Number));
    let M_arr=inputLines[3].split(' ').map(Number);
    
    let result = [];

       
    for(let i=0; i<M_arr.length; i++){
        result[i]=N_arr.has(M_arr[i]) ? 1 : 0;
    }
    
    console.log(result.join(' '));
});
