//https://www.acmicpc.net/problem/10811

const readline = require('readline');
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});


rl.question('',(input)=>{
    let [N, M]=input.split(' ').map(Number);
    let arr = [];
    let count = 0;
    for(let i=1; i<N+1; i++){
        arr[i]=i;
    }
    
    rl.on('line',(line)=>{
        let [i, j] = line.split(' ').map(Number);
        
        arr = [...arr.slice(0, i), ...arr.slice(i, j + 1).reverse(), ...arr.slice(j+1)]

        count++;
        
        if(count === M){
            console.log(arr.filter(item => item !== undefined).join(' '));
            rl.close();
        }
    })
})
