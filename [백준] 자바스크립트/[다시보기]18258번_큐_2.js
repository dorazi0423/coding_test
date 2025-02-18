//https://www.acmicpc.net/problem/18258
//시간초과로 인해 실패를 많이 했다
//여기서는 배열의 shfit()가 시간이 많이 걸려서 포인트를 이용하는게 좋다
//front와 back을 이용해서 앞의 값을 빼기 보다는 그저 포인트만 이동시키는 방법이다
//아래 티스토리에서 보았다
//https://hsyr1791.tistory.com/42

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let queue = [];
let count = 0;
let result = [];  
let front = 0;
let back = 0;

rl.question('', (input) => {
    let n = Number(input);  
    
    rl.on('line', (line) => {
        let arr = line.split(' ');

        switch (arr[0]) {
            case "push":
                queue[back++] = Number(arr[1]);
                break;
            case "pop":
                result.push(back - front === 0 ? -1 : queue[front++]);
                break;
            case "size":
                result.push(back - front);
                break;
            case "empty":
                result.push(back - front === 0 ? 1 : 0);
                break;
            case "front":
                result.push(back - front === 0 ? -1 : queue[front]);
                break;
            case "back":
                result.push(back - front === 0 ? -1 : queue[back - 1]);
                break;
        }

        count++;

        if (count === n) {
            rl.close();
        }
    });
});

rl.on('close', () => {
    console.log(result.join('\n'));
});
