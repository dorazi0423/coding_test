//https://www.acmicpc.net/problem/27323

const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let arr = [];

rl.on('line',(line)=>{
    arr.push(Number(line));

    if(arr.length===2){
        console.log(arr[0]*arr[1]);
        rl.close();
    }
});
