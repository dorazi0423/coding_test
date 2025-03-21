//https://www.acmicpc.net/problem/10813

const readline = require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('',(input)=>{
    let [N, M] = input.split(' ').map(Number);
    let arr = new Array(N)
    let count = 0;
    
    for(let i=0; i<N; i++){
        arr[i]=i+1;
    }
    
    rl.on('line',(line)=>{
        const [a, b] = line.split(' ').map(Number);
        [arr[a-1],arr[b-1]]= [arr[b-1],arr[a-1]];
        
        count++;
        if(count === M){
            console.log(arr.join(' '));
            rl.close();
        }
    })
})
