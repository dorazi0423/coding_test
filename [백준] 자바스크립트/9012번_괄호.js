//https://www.acmicpc.net/problem/9012

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('',(input)=>{
    let T = Number(input); //테스트 개수
    let count = 0; //개수
    let result = []; //결과값
    
    rl.on('line', (line)=>{
        let stack = []; //스택
        let str = line.split('');
        
        for(let i=0; i<str.length; i++){
            if(str[i]===")" && stack[stack.length-1]==="(") { 
                stack.pop();
            }
            else stack.push(str[i]);
        }
        
        if(stack.length===0) result.push("YES");
        else result.push("NO");
        
        count++;
        
        if(count===T){
            console.log(result.join('\n'));
            rl.close();
        }
    });
});
