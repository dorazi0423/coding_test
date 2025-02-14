//https://www.acmicpc.net/problem/2738

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (input) => {
    let [N, M] = input.split(' ').map(Number);  
    let arr = new Array(N * M).fill(0); 
    let count = 0;  

    rl.on('line', (line) => {
        let lineArr = line.split(' ').map(Number); 
        

        for (let i = 0; i < M; i++) {
            arr[(count%N) * M + i] += lineArr[i];  
        }

        count++;

        if (count === N*2) {
            for(let i=0; i<N; i++){
                console.log(arr.slice(i*M,(i*M)+M).join(' '))
            }
            
            rl.close(); 
        }
    });
});
