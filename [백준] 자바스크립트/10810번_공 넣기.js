//https://www.acmicpc.net/problem/10810

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (input) => {
    let [N, M] = input.split(' ').map(Number);
    let arr = new Array(N).fill(0);
    let count = 0;
    
    rl.on('line', (line) => {
        const [i, j, k] = line.split(' ').map(Number);

        for (let y = i - 1; y < j; y++) {  
            arr[y] = k;
        }

        count++;
        if (count === M) {
            console.log(arr.join(' ')); 
            rl.close(); 
        }
    });
});
