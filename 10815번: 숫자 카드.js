const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let inputLines = [];

//배열에 4줄 다 담기
rl.on('line',(line)=>{
    inputLines.push(line);
});

//input을 다 처리한 뒤 
rl.on('close',()=>{
    let N_arr=new Set(inputLines[1].split(' ').map(Number));
    let M_arr=inputLines[3].split(' ').map(Number);
    
    let result = [];

       
    for(let i=0; i<M_arr.length; i++){
        result[i]=N_arr.has(M_arr[i]) ? 1 : 0;
    }
    
    console.log(result.join(' '));
});
